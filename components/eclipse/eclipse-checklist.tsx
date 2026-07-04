"use client"

import { useEffect, useMemo, useState } from "react"
import { Camera, Check, Map, RotateCcw, ShieldCheck } from "lucide-react"

import { EclipseDictionary } from "@/lib/eclipse-experience"

const STORAGE_KEY = "solora-eclipse-2026-checklist"

type TabId = "safety" | "photo" | "plan"

export function EclipseChecklist({ dict }: { dict: EclipseDictionary }) {
  const [tab, setTab] = useState<TabId>("safety")
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setChecked(JSON.parse(stored) as Record<string, boolean>)
      }
    } catch {
      // Private mode or corrupted storage — start fresh
    }
  }, [])

  const toggle = (key: string) => {
    setChecked((current) => {
      const next = { ...current, [key]: !current[key] }
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        // Ignore storage failures
      }
      return next
    })
  }

  const reset = () => {
    setChecked({})
    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      // Ignore storage failures
    }
  }

  const tabs = useMemo(
    () =>
      [
        { id: "safety" as const, label: dict.tabSafety, icon: ShieldCheck, items: dict.itemsSafety },
        { id: "photo" as const, label: dict.tabPhoto, icon: Camera, items: dict.itemsPhoto },
        { id: "plan" as const, label: dict.tabPlan, icon: Map, items: dict.itemsPlan },
      ],
    [dict],
  )

  const totalItems = tabs.reduce((sum, entry) => sum + entry.items.length, 0)
  const totalDone = tabs.reduce(
    (sum, entry) => sum + entry.items.filter((_, index) => checked[`${entry.id}-${index}`]).length,
    0,
  )
  const active = tabs.find((entry) => entry.id === tab) ?? tabs[0]

  return (
    <div id="eclipse-checklist" className="scroll-mt-24 rounded-2xl border border-white/10 bg-black/40 p-4 md:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-white md:text-2xl">{dict.checklistTitle}</h3>
          <p className="mt-1 text-sm text-white/60">{dict.checklistSubtitle}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold tabular-nums text-[#F4B7A8]">
            {totalDone}/{totalItems} {dict.checklistReady}
          </span>
          {totalDone > 0 ? (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-xs text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <RotateCcw className="h-3 w-3" />
              {dict.checklistReset}
            </button>
          ) : null}
        </div>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#E6786E] to-[#F4B7A8] transition-all duration-500"
          style={{ width: `${totalItems ? (totalDone / totalItems) * 100 : 0}%` }}
        />
      </div>

      <div className="mt-4 flex gap-2" role="tablist" aria-label={dict.checklistTitle}>
        {tabs.map((entry) => {
          const Icon = entry.icon
          const done = entry.items.filter((_, index) => checked[`${entry.id}-${index}`]).length
          const isActive = entry.id === tab
          return (
            <button
              key={entry.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setTab(entry.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive ? "bg-[#E6786E] text-white" : "border border-white/15 bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              <Icon className="h-4 w-4" />
              {entry.label}
              <span className={`text-xs tabular-nums ${isActive ? "text-white/80" : "text-white/45"}`}>
                {done}/{entry.items.length}
              </span>
            </button>
          )
        })}
      </div>

      <ul className="mt-4 space-y-2" role="tabpanel">
        {active.items.map((item, index) => {
          const key = `${active.id}-${index}`
          const isDone = Boolean(checked[key])
          return (
            <li key={key}>
              <button
                type="button"
                onClick={() => toggle(key)}
                aria-pressed={isDone}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                  isDone
                    ? "border-[#E6786E]/40 bg-[#E6786E]/10 text-white/50"
                    : "border-white/10 bg-white/[0.03] text-white/85 hover:bg-white/[0.07]"
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                    isDone ? "border-[#E6786E] bg-[#E6786E]" : "border-white/30"
                  }`}
                >
                  {isDone ? <Check className="h-3.5 w-3.5 text-white" /> : null}
                </span>
                <span className={isDone ? "line-through" : undefined}>{item}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
