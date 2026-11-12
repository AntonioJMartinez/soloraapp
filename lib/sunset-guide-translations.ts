import type { LocalizedBlogArticle } from "@/lib/blog-posts"
import type { Locale } from "@/lib/i18n"

export const sunsetGuideTranslations = {
  fr: {
    title: "Comment prévoir un coucher de soleil coloré ?",
    description: "Évaluez les nuages, l’horizon et la visibilité pour choisir où photographier le coucher du soleil.",
    excerpt: "Une méthode pour comparer deux points de vue et décider si la lumière mérite le déplacement.",
    imageAlt: "Nuages éclairés par la lumière chaude du coucher du soleil",
    sections: [
      { heading: "Le coucher de soleil sera-t-il coloré ce soir ?", paragraphs: [
        "Repérez l’heure et la direction du coucher du soleil, puis vérifiez les nuages et la visibilité vers l’ouest. Des nuages moyens ou élevés peuvent prendre de la couleur si la lumière rasante les atteint. Une couche basse et épaisse vers l’ouest peut bloquer cette lumière. Un seul chiffre de couverture nuageuse ne décrit pas cette configuration.",
        "La NOAA explique la couleur des nuages au coucher du soleil par la diffusion de la lumière dans l’atmosphère. L’heure du coucher est calculée pour un lieu et une date. La couleur dépend de conditions météo qui évoluent.",
      ] },
      { heading: "Comparer deux points de vue avant de partir", paragraphs: [
        "Voici un exemple fictif. Une crête offre un beau premier plan mais masque l’ouest. Depuis la rive du lac, l’horizon est dégagé. Si des nuages restent éclairés vers l’ouest, la rive donne davantage de chances de les inclure dans le cadre.",
      ], table: { caption: "Deux points de vue pour une même soirée", headers: ["Point de vue", "Horizon", "Composition"], rows: [
        ["Crête", "Relief à l’ouest", "Silhouette ou lumière latérale"],
        ["Rive du lac", "Vue dégagée vers l’ouest", "Reflets et nuages colorés"],
      ] } },
      { heading: "Vérifier la météo et prévoir une alternative", paragraphs: [
        "Comparez les lieux proches sur la carte de qualité de Solora Premium, puis vérifiez l’heure locale, la visibilité, le vent et les précipitations. Examinez la direction du Soleil et préparez un autre cadrage. Si l’accès le permet, restez pendant le crépuscule pour observer l’évolution des couleurs.",
      ] },
    ],
    faqs: [
      { question: "Un ciel dégagé garantit-il un coucher de soleil coloré ?", answer: "Un ciel dégagé favorise les silhouettes et les dégradés. Des nuages éclairés peuvent ajouter de la couleur et de la texture. Vérifiez leur position par rapport au Soleil." },
      { question: "L’heure du coucher marque-t-elle la fin de la séance ?", answer: "La lumière évolue encore pendant le crépuscule. Selon l’US Naval Observatory, le crépuscule civil du soir se termine lorsque le centre du Soleil est à six degrés sous l’horizon." },
    ],
    ctaTitle: "Choisissez votre point de vue avec Solora",
    ctaDescription: "Comparez la météo, les horaires et la trajectoire du Soleil pour préparer votre prochaine sortie photo.",
    relatedLinks: [{ href: "/sunrise-sunset-app", label: "Application de prévision du lever et du coucher du soleil" }],
  },
  it: {
    title: "Come prevedere un tramonto colorato",
    description: "Valuta nuvole, visibilità e orizzonte per scegliere dove fotografare il tramonto.",
    excerpt: "Come confrontare due punti di ripresa e capire se vale la pena uscire a fotografare.",
    imageAlt: "Nuvole illuminate dalla luce calda del tramonto",
    sections: [
      { heading: "Il tramonto di stasera sarà colorato?", paragraphs: [
        "Controlla l’ora e la direzione del tramonto, poi osserva le nuvole e la visibilità a ovest. Le nubi medie e alte possono colorarsi se ricevono la luce radente. Uno strato basso e spesso verso ovest può intercettarla. La percentuale totale di nuvolosità non basta per capire come sono disposte le nubi.",
        "La NOAA spiega che la diffusione della luce nell’atmosfera influisce sui colori delle nuvole. L’orario si calcola per un luogo e una data, mentre il colore dipende dalle condizioni meteo.",
      ] },
      { heading: "Confronta due punti di ripresa", paragraphs: [
        "In questo esempio illustrativo, un crinale offre un buon primo piano ma nasconde l’orizzonte a ovest. Dalla riva del lago la visuale è libera. Se le nuvole a ovest ricevono ancora luce, la riva permette di inquadrarle insieme ai riflessi.",
      ], table: { caption: "Due punti di ripresa per la stessa sera", headers: ["Punto di ripresa", "Orizzonte", "Composizione"], rows: [
        ["Crinale", "Rilievi a ovest", "Silhouette o luce laterale"],
        ["Riva del lago", "Visuale libera a ovest", "Riflessi e nuvole colorate"],
      ] } },
      { heading: "Ricontrolla il meteo prima di uscire", paragraphs: [
        "Confronta le zone vicine sulla mappa della qualità del tramonto di Solora Premium. Verifica orario locale, visibilità, vento e pioggia, poi controlla la direzione del Sole. Prepara un’inquadratura alternativa e, se il luogo è accessibile, osserva come cambia la luce durante il crepuscolo.",
      ] },
    ],
    faqs: [
      { question: "Il cielo sereno garantisce un tramonto colorato?", answer: "Il cielo sereno si presta a silhouette e sfumature uniformi. Le nuvole illuminate possono aggiungere colore e consistenza. Conta anche la loro posizione rispetto al Sole." },
      { question: "Conviene restare dopo il tramonto?", answer: "La luce può cambiare durante il crepuscolo. Secondo lo US Naval Observatory, il crepuscolo civile serale termina quando il centro del Sole è sei gradi sotto l’orizzonte." },
    ],
    ctaTitle: "Scegli dove fotografare con Solora",
    ctaDescription: "Confronta meteo, orari e traiettoria del Sole prima della tua prossima uscita.",
    relatedLinks: [{ href: "/sunrise-sunset-app", label: "App per le previsioni di alba e tramonto" }],
  },
  de: {
    title: "Wie lässt sich ein farbiger Sonnenuntergang vorhersagen?",
    description: "Prüfe Wolken, Sicht und Horizont, um einen passenden Standort für Sonnenuntergangsfotos zu finden.",
    excerpt: "So vergleichst du zwei Fotostandorte und entscheidest, ob sich der Weg lohnt.",
    imageAlt: "Wolken im warmen Licht des Sonnenuntergangs",
    sections: [
      { heading: "Wird der Sonnenuntergang heute Abend farbig?", paragraphs: [
        "Prüfe die Uhrzeit und Richtung des Sonnenuntergangs und schau auf Wolken und Sicht nach Westen. Mittelhohe und hohe Wolken können Farbe annehmen, wenn tief stehendes Sonnenlicht sie erreicht. Eine dichte tiefe Wolkenschicht im Westen kann dieses Licht abschirmen. Der gesamte Bewölkungsgrad allein sagt wenig über die Anordnung der Wolken aus.",
        "Die NOAA erklärt die Wolkenfarben bei Sonnenuntergang mit der Streuung des Lichts in der Atmosphäre. Die Uhrzeit lässt sich für Ort und Datum berechnen. Die Farbe hängt vom Wetter ab.",
      ] },
      { heading: "Zwei Fotostandorte vergleichen", paragraphs: [
        "In diesem Beispiel bietet ein Bergrücken einen interessanten Vordergrund, verdeckt aber die Sicht nach Westen. Am Seeufer ist der Horizont frei. Wenn die Wolken im Westen noch Licht bekommen, lassen sie sich dort zusammen mit ihren Spiegelungen fotografieren.",
      ], table: { caption: "Zwei Standorte für denselben Abend", headers: ["Standort", "Horizont", "Bildidee"], rows: [
        ["Bergrücken", "Gelände versperrt den Blick nach Westen", "Silhouette oder Seitenlicht"],
        ["Seeufer", "Freier Blick nach Westen", "Spiegelungen und farbige Wolken"],
      ] } },
      { heading: "Die Prognose vor der Abfahrt prüfen", paragraphs: [
        "Vergleiche nahe gelegene Gebiete auf der Prognosekarte von Solora Premium. Prüfe anschließend Ortszeit, Sicht, Wind und Niederschlag sowie die Richtung der Sonne. Plane eine zweite Bildidee ein und beobachte bei geeignetem Zugang, wie sich das Licht in der Dämmerung verändert.",
      ] },
    ],
    faqs: [
      { question: "Garantiert klarer Himmel einen farbigen Sonnenuntergang?", answer: "Klarer Himmel eignet sich für Silhouetten und sanfte Farbverläufe. Beleuchtete Wolken können zusätzliche Farbe und Struktur bringen. Entscheidend ist auch ihre Lage zur Sonne." },
      { question: "Lohnt es sich, nach Sonnenuntergang zu bleiben?", answer: "Das Licht verändert sich in der Dämmerung weiter. Laut US Naval Observatory endet die bürgerliche Abenddämmerung, wenn der Mittelpunkt der Sonne sechs Grad unter dem Horizont steht." },
    ],
    ctaTitle: "Finde deinen Fotostandort mit Solora",
    ctaDescription: "Vergleiche Wetter, Uhrzeiten und Sonnenverlauf vor deinem nächsten Fotoausflug.",
    relatedLinks: [{ href: "/sunrise-sunset-app", label: "App für Sonnenaufgangs- und Sonnenuntergangsprognosen" }],
  },
  pt: {
    title: "Como prever um pôr do sol colorido",
    description: "Avalie as nuvens, a visibilidade e o horizonte para escolher onde fotografar o pôr do sol.",
    excerpt: "Compare dois locais e decida se vale a pena sair para fotografar.",
    imageAlt: "Nuvens iluminadas pela luz quente do pôr do sol",
    sections: [
      { heading: "O pôr do sol de hoje vai ser colorido?", paragraphs: [
        "Confirme o horário e a direção do pôr do sol. Depois, confira as nuvens e a visibilidade a oeste. Nuvens médias ou altas podem ganhar cor quando recebem luz rasante. Uma camada baixa e espessa a oeste pode bloquear essa luz. A porcentagem total de nuvens não mostra como elas estão distribuídas.",
        "A NOAA explica que a dispersão da luz na atmosfera influencia a cor das nuvens. O horário pode ser calculado para cada local e data. A cor depende das condições meteorológicas.",
      ] },
      { heading: "Compare dois lugares antes de sair", paragraphs: [
        "Neste exemplo ilustrativo, uma serra oferece um bom primeiro plano, mas esconde o horizonte a oeste. À beira do lago, a vista é aberta. Se as nuvens a oeste ainda receberem luz, a margem permite fotografá-las junto com os reflexos.",
      ], table: { caption: "Dois locais para o mesmo fim de tarde", headers: ["Local", "Horizonte", "Enquadramento"], rows: [
        ["Serra", "Relevo bloqueia a vista a oeste", "Silhueta ou luz lateral"],
        ["Margem do lago", "Vista aberta a oeste", "Reflexos e nuvens coloridas"],
      ] } },
      { heading: "Confira a previsão de novo antes de sair", paragraphs: [
        "Compare áreas próximas no mapa de qualidade do pôr do sol do Solora Premium. Confira o horário local, a visibilidade, o vento, a chuva e a direção do Sol. Prepare outro enquadramento e, se o acesso permitir, acompanhe a mudança da luz durante o crepúsculo.",
      ] },
    ],
    faqs: [
      { question: "Céu limpo garante um pôr do sol colorido?", answer: "O céu limpo favorece silhuetas e transições suaves de cor. Nuvens iluminadas podem acrescentar cor e textura. A posição delas em relação ao Sol também conta." },
      { question: "Vale a pena ficar depois do pôr do sol?", answer: "A luz continua mudando durante o crepúsculo. Segundo o US Naval Observatory, o crepúsculo civil da tarde termina quando o centro do Sol está a seis graus abaixo do horizonte." },
    ],
    ctaTitle: "Escolha onde fotografar com o Solora",
    ctaDescription: "Compare a previsão, os horários e a trajetória do Sol antes da sua próxima saída.",
    relatedLinks: [{ href: "/sunrise-sunset-app", label: "App de previsão do nascer e do pôr do sol" }],
  },
  zh: {
    title: "怎样判断今天的日落会不会出现晚霞？",
    description: "结合云层、能见度和西边的地平线，判断是否值得出门拍日落，并选择合适的机位。",
    excerpt: "用天气预报比较两个机位，为日落拍摄做好准备。",
    imageAlt: "日落时被暖色光线照亮的云层",
    sections: [
      { heading: "今天傍晚会有晚霞吗？", paragraphs: [
        "先查日落时间和方向，再看西边的云层与能见度。如果低角度的阳光能照到中高层云，云层就可能泛红；西边厚重的低云则可能挡住光线。总云量只能说明天空有多少被云覆盖，无法说明云层的位置和高度。",
        "美国国家海洋和大气管理局（NOAA）用大气对光的散射解释了日落时的云彩颜色。日落时间可按地点和日期计算，晚霞的颜色则取决于当时的天气。",
      ] },
      { heading: "出门前比较两个机位", paragraphs: [
        "举个例子：山脊的前景有层次，但西边被山体挡住；湖边的西侧视野更开阔。如果西边的云还能被阳光照亮，湖边就更适合把云彩和倒影一起拍下来。",
      ], table: { caption: "同一个傍晚的两个机位", headers: ["机位", "地平线", "构图思路"], rows: [
        ["山脊", "西侧视线受山体遮挡", "剪影或侧光"],
        ["湖边", "西侧视野开阔", "倒影和彩云"],
      ] } },
      { heading: "临出发时再核对一次预报", paragraphs: [
        "在 Solora Premium 的日落质量预报地图上比较附近区域，再核对当地时间、能见度、风雨和太阳方向。准备一个备用构图。如果场地允许，可以留到暮光时段观察色彩变化。",
      ] },
    ],
    faqs: [
      { question: "晴天一定能拍到晚霞吗？", answer: "晴空适合拍剪影和渐变的天空。被照亮的云可以增加色彩和层次，效果也取决于云和太阳的相对位置。" },
      { question: "太阳落山后还值得继续拍吗？", answer: "暮光时段的光线仍会变化。按美国海军天文台的定义，当太阳中心降到地平线下六度时，傍晚的民用暮光结束。" },
    ],
    ctaTitle: "用 Solora 选择拍摄地点",
    ctaDescription: "出发前比较天气、日落时间和太阳轨迹。",
    relatedLinks: [{ href: "/sunrise-sunset-app", label: "日出日落预报应用" }],
  },
} satisfies Record<Exclude<Locale, "en" | "es">, Omit<LocalizedBlogArticle, "sources">>
