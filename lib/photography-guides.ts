import type { LocalizedBlogArticle } from "@/lib/blog-posts"

const sources = [
  { href: "https://www.noaa.gov/jetstream/clouds/color-of-clouds", label: "NOAA: The Color of Clouds" },
  { href: "https://aa.usno.navy.mil/faq/RST_defs", label: "US Naval Observatory: Rise, Set, and Twilight Definitions" },
]

const links = {
  en: [
    { href: "/sunrise-sunset-app", label: "Sunrise and sunset forecast app" },
    { href: "/sun-tracker-app", label: "Plan the Sun's direction with map and AR" },
    { href: "/golden-hour-photography-app", label: "Golden hour planning with Solora" },
  ],
  es: [
    { href: "/sunrise-sunset-app", label: "App de previsión de amanecer y atardecer" },
    { href: "/sun-tracker-app", label: "Planifica la dirección del Sol con mapa y AR" },
    { href: "/golden-hour-photography-app", label: "Planifica la hora dorada con Solora" },
  ],
}

function guide(
  locale: "en" | "es",
  content: Omit<LocalizedBlogArticle, "relatedLinks" | "sources" | "ctaTitle" | "ctaDescription">,
): LocalizedBlogArticle {
  return {
    ...content,
    sources,
    relatedLinks: [...links[locale],
      { href: "/blog/sunset-quality-prediction-guide", label: locale === "en" ? "Sunset quality: clouds, light and timing" : "Calidad del atardecer: nubes, luz y horarios" },
      { href: "/blog/golden-hour-photography-guide", label: locale === "en" ? "Golden hour photography guide" : "Guía de fotografía en hora dorada" },
      { href: "/blog/weather-patterns-sky-photography", label: locale === "en" ? "Read cloud cover before your shoot" : "Interpreta las nubes antes de fotografiar" },
    ],
    ctaTitle: locale === "en" ? "Turn the forecast into a photography plan" : "Convierte la previsión en un plan fotográfico",
    ctaDescription: locale === "en"
      ? "Use Solora to check sunrise and sunset timing, weather and the Sun's path, then compare your saved locations before heading out."
      : "Consulta horarios, meteorología y trayectoria solar en Solora y compara tus ubicaciones guardadas antes de salir.",
  }
}

export const photographyGuides: Record<string, Record<"en" | "es", LocalizedBlogArticle>> = {
  "sunset-quality-prediction-guide": {
    en: guide("en", {
      title: "How to Predict a Colorful Sunset: Clouds, Light and Timing",
      description: "Learn how to assess sunset quality using cloud layers, horizon visibility and forecast changes, then plan where and when to photograph it.",
      excerpt: "A practical way to judge whether tonight's sunset is worth a photography trip, with clear limits on what forecasts can tell you.",
      imageAlt: "Warm sunset light illuminating clouds above a landscape",
      sections: [
        { heading: "Can you predict whether a sunset will be colorful?", paragraphs: [
          "You can estimate the conditions for a colorful sunset, but you cannot guarantee the result. Start with the sunset time and direction for your location, then assess cloud layers, the western horizon and the latest weather forecast. A promising combination is useful for choosing a viewpoint; it is not a promise of a spectacular sky.",
          "A sunset-time calculator answers when the Sun sets. A sunset-quality prediction estimates the appearance of the light using weather information. These are different questions: the calculated time can remain the same while the forecast changes as clouds move. Treat a quality rating as a planning signal rather than a probability unless its provider explicitly defines it that way.",
        ] },
        { heading: "Why clouds can turn orange and pink", paragraphs: [
          "NOAA explains that sunlight travels through a longer atmospheric path near sunrise and sunset. Scattering changes the light that reaches a cloud, which can then appear yellow, orange or red. The location and thickness of clouds matter because they affect whether that light reaches the parts of the sky you can see.",
          "For scouting, look for clouds that could catch low-angle light and for a path that allows sunlight to reach them. A single cloud-cover percentage does not describe the whole scene. Two viewpoints can report similar coverage and still have very different light because the clouds and horizon are arranged differently.",
        ] },
        { heading: "A checklist before you leave", paragraphs: [
          "Use the forecast to narrow your options, then check what you can observe locally. Revisit the plan shortly before departure rather than relying only on a forecast saved days earlier.",
        ], bullets: [
          "Confirm the location, date, local timezone and sunset direction.",
          "Look for a clear line of sight toward the western horizon; hills, buildings and trees can hide the Sun earlier than the calculated sunset.",
          "Review cloud conditions through the shooting window, not just at the moment of sunset.",
          "Check visibility, precipitation and wind alongside the cloud forecast.",
          "Choose a nearby backup viewpoint and allow enough time to arrive, walk and set up.",
          "Plan a safe return route before the light fades.",
        ] },
        { heading: "Choose a scene, not just a score", paragraphs: [
          "Imagine two candidate viewpoints: one faces the sunset but has a ridge blocking the horizon; another has open water and a shorter journey. Even if the first forecast looks more promising, the second may give you more time to react and a clearer composition. This is an illustrative decision, not a live forecast for either location.",
          "Use Solora's Sun-path map or AR view to understand where the light will fall relative to your subject. Compare saved locations together with their weather context. Decide whether you want a silhouette toward the Sun, side-lit terrain or clouds above a foreground: each can work under different conditions.",
        ] },
        { heading: "Stay flexible around sunset and twilight", paragraphs: [
          "Arrive before the Sun reaches the horizon so you can compose while there is still usable light. If conditions and access allow, keep watching into twilight rather than packing away at the listed sunset time. The strongest photograph may come from changing cloud light or a quieter scene after the Sun has disappeared.",
          "The US Naval Observatory defines evening civil twilight as ending when the Sun's center is six degrees below the horizon. That is an astronomical boundary, not a guarantee of visible color. Local cloud, terrain and your subject determine what you can actually photograph.",
        ] },
        { heading: "Why a promising forecast can be wrong", paragraphs: [
          "Small changes in cloud placement can affect the light at your viewpoint. Weather forecasts describe an area and may not capture the exact horizon, a local fog bank or a gap in moving clouds. Longer-range forecasts should help you keep a window free; nearer the event, reassess the journey using current information.",
          "Keep a small record of forecast conditions, the viewpoint and the photographs you made. Over time, this helps you learn which local horizons and compositions work for you. It is more useful than assuming one universal cloud percentage produces the best sunsets everywhere.",
        ] },
      ],
      faqs: [
        { question: "Will the sunset be good tonight?", answer: "That needs a current forecast for your exact location. This guide explains how to assess conditions; it does not provide tonight's live sunset rating. Check the latest local forecast and horizon before making a travel decision." },
        { question: "Does a clear sky guarantee a colorful sunset?", answer: "No. Clear skies can provide warm light and clean silhouettes, while illuminated clouds can add texture and color. The strongest conditions depend on the scene you want to photograph." },
        { question: "Can I use the same checklist for sunrise?", answer: "Yes, but check the eastern horizon and begin your setup before sunrise. Forecast conditions, location access and the direction of the light still matter." },
      ],
    }),
    es: guide("es", {
      title: "Cómo predecir un atardecer de colores: nubes, luz y horarios",
      description: "Aprende a valorar la calidad del atardecer con nubosidad, visibilidad del horizonte y cambios en la previsión antes de salir a fotografiar.",
      excerpt: "Un método práctico para decidir si merece la pena salir a fotografiar el atardecer, sin confundir una previsión con una garantía.",
      imageAlt: "Luz cálida del atardecer iluminando nubes sobre un paisaje",
      sections: [
        { heading: "¿Se puede predecir si un atardecer tendrá colores?", paragraphs: [
          "Puedes estimar si las condiciones favorecen un atardecer de colores, pero no garantizar el resultado. Empieza por la hora y la dirección de la puesta de sol en tu ubicación. Después revisa las nubes, el horizonte occidental y la previsión meteorológica más reciente. Una combinación favorable ayuda a elegir un mirador, pero no asegura un cielo espectacular.",
          "Un cálculo de puesta de sol responde a cuándo se oculta el Sol. Una predicción de calidad intenta anticipar el aspecto de la luz con información meteorológica. La hora puede mantenerse mientras cambia la previsión de nubes. Interpreta una valoración como una ayuda para planificar, no como una probabilidad, salvo que el proveedor la defina así.",
        ] },
        { heading: "Por qué las nubes pueden verse rosas y naranjas", paragraphs: [
          "NOAA explica que, cerca del amanecer y del atardecer, la luz solar recorre más atmósfera. La dispersión modifica la luz que llega a las nubes, que pueden verse amarillas, naranjas o rojas. Su posición y espesor influyen en si reciben esa luz y en qué parte de la escena puedes observarla.",
          "Busca nubes que puedan recibir luz baja y una trayectoria sin obstáculos para esa iluminación. Un porcentaje de nubosidad no describe toda la escena. Dos miradores con cobertura similar pueden ofrecer resultados distintos si las nubes y el horizonte están distribuidos de otra forma.",
        ] },
        { heading: "Lista de comprobación antes de salir", paragraphs: [
          "Utiliza la previsión para reducir las opciones y contrástala con lo que puedas observar cerca de ti. Revisa el plan antes de salir en lugar de depender de una captura guardada días atrás.",
        ], bullets: [
          "Confirma ubicación, fecha, zona horaria local y dirección de la puesta de sol.",
          "Comprueba que montañas, edificios o árboles no bloqueen el horizonte occidental.",
          "Revisa la nubosidad durante toda la sesión, no solo a la hora del ocaso.",
          "Valora visibilidad, lluvia y viento junto con las nubes.",
          "Elige una alternativa cercana y reserva tiempo para llegar y montar el equipo.",
          "Prepara una ruta de regreso segura antes de que oscurezca.",
        ] },
        { heading: "Elige una escena, no solo una puntuación", paragraphs: [
          "Imagina dos miradores: uno apunta hacia la puesta de sol, pero una cresta tapa el horizonte; el otro tiene vista abierta al agua y está más cerca. Aunque la previsión del primero parezca mejor, el segundo puede darte más margen para reaccionar y una composición más limpia. Es un ejemplo de decisión, no una previsión actual para esos lugares.",
          "Utiliza el mapa de trayectoria solar o la vista AR de Solora para situar la luz respecto al sujeto. Compara tus ubicaciones guardadas con su contexto meteorológico. Una silueta, una ladera iluminada de lado y unas nubes sobre el primer plano pueden requerir condiciones distintas.",
        ] },
        { heading: "Deja margen para el crepúsculo", paragraphs: [
          "Llega antes de la puesta de sol para componer mientras queda luz. Si el acceso y las condiciones lo permiten, observa también el crepúsculo. La mejor imagen puede surgir después de que el Sol desaparezca, cuando cambia la luz de las nubes o se simplifica la escena.",
          "El Observatorio Naval de Estados Unidos sitúa el final del crepúsculo civil vespertino cuando el centro del Sol está seis grados bajo el horizonte. Es un límite astronómico, no una garantía de color: las nubes, el relieve y el sujeto condicionan la fotografía.",
        ] },
        { heading: "Por qué puede fallar una buena previsión", paragraphs: [
          "Un cambio pequeño en la posición de las nubes puede alterar la luz. La previsión describe una zona y no siempre recoge el horizonte concreto, un banco de niebla local o un claro entre nubes. Usa las previsiones lejanas para reservar una ventana y vuelve a valorar el desplazamiento con información reciente.",
          "Guarda un pequeño registro de condiciones previstas, lugar y fotos obtenidas. Te ayudará a conocer tus horizontes y composiciones habituales sin asumir que existe un porcentaje de nubosidad ideal para todos los atardeceres.",
        ] },
      ],
      faqs: [
        { question: "¿Será bonito el atardecer de hoy?", answer: "Necesitas una previsión actual de tu ubicación. Esta guía explica cómo valorar las condiciones, pero no ofrece una puntuación en directo para esta tarde. Revisa la meteorología y el horizonte antes de desplazarte." },
        { question: "¿Un cielo despejado garantiza un atardecer de colores?", answer: "No. Puede dar luz cálida y buenas siluetas; las nubes iluminadas pueden aportar textura y color. Las condiciones más útiles dependen de la escena que busques." },
        { question: "¿Sirve también para el amanecer?", answer: "Sí, pero revisa el horizonte oriental y prepara el equipo antes del amanecer. La previsión, el acceso y la dirección de la luz siguen siendo esenciales." },
      ],
    }),
  },
  "golden-hour-photography-guide": {
    en: guide("en", {
      title: "Golden Hour Photography: Timing, Light and a Practical Plan",
      description: "Understand golden hour and blue hour, choose the direction of your light, and build a sunrise or sunset photography plan with flexible camera settings.",
      excerpt: "Plan warm light around sunrise and sunset with a location checklist, camera starting points and a clear distinction between golden and blue hour.",
      imageAlt: "Golden hour light over a landscape near sunset",
      sections: [
        { heading: "What is golden hour?", paragraphs: [
          "Golden hour is the period of low-angle sunlight around sunrise and sunset that photographers use for warm tones and long shadows. It is a photographic term rather than a fixed sixty-minute interval. Its duration changes with latitude, season and the definition used by your planning tool.",
          "Check the interval for your chosen location and date instead of subtracting one hour from sunset. Terrain can hide the Sun while the calculated golden-hour window is still open. Cloud can also remove direct sunlight, so the listed time is a planning window rather than a guarantee of golden light.",
        ] },
        { heading: "Golden hour, sunset and blue hour are different", paragraphs: [
          "Sunset is a defined astronomical event. Golden hour describes low-angle direct light; blue hour describes a twilight look when the Sun is below the horizon. Different apps can use different solar-elevation ranges for the photographic periods. Compare definitions before treating two displayed windows as contradictory.",
        ], table: { caption: "Choose the light for your subject", headers: ["Period", "What to plan", "Example subject"], rows: [
          ["Golden hour", "Low Sun and the direction of direct light", "Side-lit hills, portraits and long shadows"],
          ["Sunset", "Where the Sun meets the visible horizon", "Silhouettes and alignment compositions"],
          ["Blue hour", "Fading twilight and artificial lights", "City skylines and reflections"],
        ] } },
        { heading: "Plan direction before camera settings", paragraphs: [
          "A viewpoint with the Sun behind you gives a different image from one facing it. Side light can reveal texture; backlighting can separate a subject from the background or create a silhouette. Choose that relationship first, then use a Sun-path map or AR view to check whether the angle works on your shooting date.",
          "Arrive early enough to walk the location and adjust the composition. Check the horizon, safe access, wind and any tide constraints. Have a second composition ready if the Sun disappears behind cloud: a reflection, a tighter frame or a softly lit detail can keep the session useful.",
        ] },
        { heading: "Camera starting points, not universal settings", paragraphs: [
          "For a static landscape, begin with a low ISO and an aperture that gives the depth of field you need, then adjust shutter speed to the available light. A tripod helps as exposure times lengthen. For people or moving water, choose the shutter speed for the motion you want before reducing ISO.",
          "Check the histogram and bright areas rather than relying only on how the screen looks outdoors. RAW files give you more editing flexibility where your camera supports them. Use exposure bracketing for a static high-contrast scene if appropriate, but moving subjects can make blending difficult. No single setting fits every sunset.",
        ] },
        { heading: "A simple shooting sequence", paragraphs: [
          "Before leaving, check the location's sunrise or sunset time, photographic light windows and weather. In Solora, combine that timing with the Sun's path and saved locations rather than choosing a spot on the clock alone.",
        ], bullets: [
          "Scout your foreground and the direction of light while there is time to move.",
          "Make a first frame, check focus and exposure, then refine the composition.",
          "Watch how shadows and clouds change rather than repeating one exposure unchanged.",
          "If safe, remain through twilight for a different color balance or city-light composition.",
          "Review what worked and note the location for a future season or weather pattern.",
        ] },
      ],
      faqs: [
        { question: "Does golden hour last exactly one hour?", answer: "No. Its duration depends on location, date and the solar-elevation range used by the planning tool. Check a location-specific window." },
        { question: "Can you photograph golden hour on a cloudy day?", answer: "You can photograph during the calculated interval, but cloud may prevent warm direct light. Adapt the composition to the light you actually see." },
      ],
    }),
    es: guide("es", {
      title: "Fotografía en hora dorada: horarios, luz y planificación",
      description: "Distingue hora dorada y hora azul, elige la dirección de la luz y prepara una sesión al amanecer o atardecer con ajustes de cámara flexibles.",
      excerpt: "Planifica la luz cálida con una lista de ubicación, ajustes de partida y una explicación práctica de la hora dorada y la hora azul.",
      imageAlt: "Luz de hora dorada sobre un paisaje al atardecer",
      sections: [
        { heading: "¿Qué es la hora dorada?", paragraphs: [
          "La hora dorada es el período de luz solar baja alrededor del amanecer y del atardecer que se aprovecha para tonos cálidos y sombras largas. Es un término fotográfico, no un intervalo fijo de sesenta minutos. Su duración cambia con la latitud, la estación y la definición de la herramienta.",
          "Consulta el intervalo de tu ubicación y fecha en lugar de restar una hora a la puesta de sol. El relieve puede ocultar el Sol antes de que termine la ventana calculada. Las nubes también pueden bloquear la luz directa: el horario ayuda a planificar, pero no garantiza luz dorada.",
        ] },
        { heading: "Hora dorada, puesta de sol y hora azul", paragraphs: [
          "La puesta de sol es un evento astronómico definido. La hora dorada describe luz directa a baja altura; la hora azul, un aspecto del crepúsculo con el Sol bajo el horizonte. Las apps pueden utilizar intervalos de elevación solar distintos. Comprueba sus definiciones antes de comparar horarios.",
        ], table: { caption: "Elige la luz según tu sujeto", headers: ["Período", "Qué planificar", "Ejemplo"], rows: [
          ["Hora dorada", "Sol bajo y dirección de luz directa", "Laderas iluminadas de lado, retratos y sombras"],
          ["Puesta de sol", "Encuentro del Sol con el horizonte visible", "Siluetas y alineaciones"],
          ["Hora azul", "Crepúsculo y luces artificiales", "Perfiles urbanos y reflejos"],
        ] } },
        { heading: "Planifica la dirección antes de los ajustes", paragraphs: [
          "Tener el Sol detrás produce una imagen distinta a fotografiar hacia él. La luz lateral revela textura; el contraluz puede separar al sujeto del fondo o crear una silueta. Decide esa relación y comprueba con mapa de trayectoria solar o AR si funciona en la fecha elegida.",
          "Llega con margen para recorrer el lugar y ajustar el encuadre. Revisa horizonte, acceso, viento y mareas cuando afecten a la sesión. Prepara otra composición si las nubes tapan el Sol: un reflejo, un encuadre cerrado o un detalle con luz suave.",
        ] },
        { heading: "Ajustes de partida, no recetas universales", paragraphs: [
          "En un paisaje estático, comienza con ISO bajo y una apertura que dé la profundidad de campo necesaria; adapta la velocidad a la luz disponible. El trípode ayuda cuando se alarga la exposición. Con personas o agua en movimiento, elige primero la velocidad según el movimiento que quieras mostrar.",
          "Comprueba histograma y altas luces, no solo la pantalla al aire libre. RAW ofrece más margen de edición cuando la cámara lo admite. El horquillado puede ayudar en escenas estáticas de alto contraste, pero el movimiento complica la combinación de imágenes. No existe un ajuste único para todos los atardeceres.",
        ] },
        { heading: "Una secuencia de trabajo sencilla", paragraphs: [
          "Antes de salir, consulta amanecer o puesta de sol, ventanas de luz y meteorología. En Solora, combina esos horarios con trayectoria solar y ubicaciones guardadas para elegir el lugar con más contexto.",
        ], bullets: [
          "Explora primer plano y dirección de la luz mientras aún puedes moverte.",
          "Haz una primera foto y comprueba enfoque y exposición.",
          "Observa cómo cambian sombras y nubes y adapta los ajustes.",
          "Si es seguro, continúa durante el crepúsculo para otra composición.",
          "Anota qué funcionó para repetir el lugar en otra estación o situación meteorológica.",
        ] },
      ],
      faqs: [
        { question: "¿La hora dorada dura exactamente una hora?", answer: "No. Depende del lugar, la fecha y el intervalo de elevación solar utilizado por la herramienta. Consulta una ventana específica de tu ubicación." },
        { question: "¿Se puede fotografiar la hora dorada con nubes?", answer: "Sí, pero la nubosidad puede impedir la luz cálida directa. Adapta la composición a la iluminación que observes." },
      ],
    }),
  },
  "weather-patterns-sky-photography": {
    en: guide("en", {
      title: "Cloud Cover for Sunset Photography: Read the Whole Forecast",
      description: "Assess cloud cover, horizon visibility, wind and rain before a sunset shoot. Learn why one percentage cannot predict the quality of your light.",
      excerpt: "A location-first weather checklist for sunrise and sunset photography, with a backup plan when clouds change.",
      imageAlt: "Cloud layers illuminated by evening light",
      sections: [
        { heading: "Cloud cover is a starting point", paragraphs: [
          "Cloud coverage tells you how much of the sky is covered, but it does not tell you whether the Sun will illuminate the clouds in your frame. Read it alongside the horizon, cloud structure and changes expected during the session. There is no universal cloud-cover percentage that guarantees a good photograph.",
          "NOAA's explanation of cloud color connects their appearance to the sunlight they receive. For a photographic decision, that means asking where the light can travel and what your viewpoint can see, rather than looking for a single ideal number.",
        ] },
        { heading: "Check the horizon and the shooting window", paragraphs: [
          "Look toward the sunset direction, not just overhead. An obstacle or dense cloud near that direction can matter more to your composition than a patch of clear sky behind you. Use the Sun's path to decide which part of the horizon needs to be visible.",
          "Review the forecast before, during and after sunset. Moving cloud can change the scene within the session, while fog and poor visibility can obscure a distant subject. For sunrise, make the same checks toward the eastern horizon and plan access in darkness.",
        ] },
        { heading: "Read other weather variables together", paragraphs: [
          "Wind influences comfort, tripod stability and motion in trees or water. Rain affects access and equipment choices. Visibility matters for distant ridges and skylines. None of these independently describes sunset color, but each can change whether your planned photograph is practical.",
          "Use current local observations where available to check the forecast against reality. Forecast information is an estimate for a place and time; it does not replace looking at the sky or checking conditions at the viewpoint.",
        ], table: { caption: "From forecast to decision", headers: ["Signal", "Question to ask", "Practical response"], rows: [
          ["Cloud", "Can light reach the clouds in my composition?", "Watch the horizon as well as coverage"],
          ["Visibility", "Will the distant subject be visible?", "Prepare a closer foreground"],
          ["Wind", "Can I keep the camera steady?", "Choose shelter or adapt exposure"],
          ["Rain", "Is access and the return route suitable?", "Use a safer alternative or postpone"],
        ] } },
        { heading: "Make a realistic backup plan", paragraphs: [
          "Compare a small number of saved locations in Solora rather than chasing every forecast change. A nearby viewpoint with a clear horizon may be a more useful backup than a distant spot that requires leaving too late. Keep the travel decision separate from the decision to change your composition on arrival.",
          "If the sky loses color, try silhouettes, reflections or details in soft light. Record the conditions afterward so you can learn which scenes work locally. A forecast that did not produce the photograph you imagined can still teach you how to plan the next session.",
        ] },
      ],
      faqs: [
        { question: "What cloud percentage is best for sunset photography?", answer: "There is no universal best percentage. Cloud placement, thickness, available sunlight and the subject all affect the result. Read the whole forecast and inspect the horizon." },
        { question: "Is this a live cloud forecast?", answer: "No. This is a planning guide. Use current location-specific weather information for your session." },
      ],
    }),
    es: guide("es", {
      title: "Nubosidad para fotografiar el atardecer: interpreta la previsión",
      description: "Valora nubes, horizonte, visibilidad, viento y lluvia antes de fotografiar el atardecer. Un porcentaje no basta para anticipar la calidad de la luz.",
      excerpt: "Una lista meteorológica para preparar fotos al amanecer y al atardecer y adaptar el plan cuando cambian las nubes.",
      imageAlt: "Capas de nubes iluminadas por la luz del atardecer",
      sections: [
        { heading: "La nubosidad es un punto de partida", paragraphs: [
          "La cobertura de nubes indica cuánto cielo está cubierto, pero no si el Sol iluminará las nubes de tu encuadre. Combínala con el horizonte, la estructura de las nubes y su evolución durante la sesión. No existe un porcentaje universal que garantice una buena fotografía.",
          "La explicación de NOAA sobre el color de las nubes lo relaciona con la luz que reciben. Para planificar una foto, pregunta por dónde puede llegar esa luz y qué puedes ver desde el mirador, en lugar de buscar un único valor ideal.",
        ] },
        { heading: "Revisa el horizonte y toda la sesión", paragraphs: [
          "Mira hacia la puesta de sol, no solo sobre tu cabeza. Un obstáculo o una nube densa en esa dirección puede afectar más al encuadre que un claro detrás de ti. Consulta la trayectoria solar para saber qué parte del horizonte debe quedar visible.",
          "Revisa la previsión antes, durante y después del ocaso. Las nubes pueden cambiar la escena durante la sesión; la niebla y la mala visibilidad pueden ocultar un sujeto lejano. Para el amanecer, comprueba el horizonte oriental y prepara el acceso con poca luz.",
        ] },
        { heading: "Combina las variables meteorológicas", paragraphs: [
          "El viento afecta a comodidad, estabilidad del trípode y movimiento de árboles o agua. La lluvia condiciona acceso y equipo. La visibilidad importa para montañas y perfiles urbanos lejanos. No describen por sí solas el color del cielo, pero sí la viabilidad de tu fotografía.",
          "Contrasta la previsión con observaciones locales cuando estén disponibles. Es una estimación para un lugar y un momento; no sustituye observar el cielo ni comprobar las condiciones del mirador.",
        ], table: { caption: "De la previsión a la decisión", headers: ["Señal", "Pregunta", "Respuesta práctica"], rows: [
          ["Nubes", "¿Llegará luz a las nubes del encuadre?", "Observa horizonte y cobertura"],
          ["Visibilidad", "¿Se verá el sujeto lejano?", "Prepara un primer plano cercano"],
          ["Viento", "¿Puedo mantener estable la cámara?", "Busca resguardo o adapta exposición"],
          ["Lluvia", "¿Son adecuados acceso y regreso?", "Elige otra ubicación o pospón"],
        ] } },
        { heading: "Prepara una alternativa realista", paragraphs: [
          "Compara unas pocas ubicaciones guardadas en Solora en lugar de perseguir cada cambio. Un mirador cercano con horizonte abierto puede ser mejor alternativa que un lugar lejano al que llegarías tarde. Decide por separado si cambiar de ubicación o adaptar el encuadre al llegar.",
          "Si desaparece el color, prueba siluetas, reflejos o detalles con luz suave. Anota después las condiciones para aprender qué funciona en tu zona. Una sesión distinta a la esperada también puede ayudarte a preparar la siguiente.",
        ] },
      ],
      faqs: [
        { question: "¿Qué porcentaje de nubes es mejor para el atardecer?", answer: "No hay uno universal. Importan posición, espesor, luz disponible y sujeto. Revisa la previsión completa y el horizonte." },
        { question: "¿Esta página ofrece una previsión de nubes en directo?", answer: "No. Es una guía de planificación. Consulta meteorología actual de tu ubicación antes de la sesión." },
      ],
    }),
  },
}
