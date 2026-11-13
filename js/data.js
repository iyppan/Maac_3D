/**
 * 3D & GAME ART JOB OPPORTUNITIES DIRECTORY DATA
 * Complete 44 Industry Roles Across 5 Software Suites
 */

const SOFTWARE_METADATA = {
  max: {
    id: "max",
    name: "Autodesk 3ds Max",
    shortName: "3ds Max",
    color: "#06b6d4", // Cyan
    accentGlow: "rgba(6, 182, 212, 0.25)",
    roleCount: 9,
    sharePercent: 20.5,
    focus: "ArchViz, Environment & Hard-Surface Modeling, VFX Simulations, Product & Event Design",
    hubs: "Bengaluru, Mumbai, Chennai, Hyderabad, Delhi NCR, Remote ArchViz Studios",
    badgeClass: "badge-max"
  },
  maya: {
    id: "maya",
    name: "Autodesk Maya",
    shortName: "Maya",
    color: "#10b981", // Emerald
    accentGlow: "rgba(16, 185, 129, 0.25)",
    roleCount: 9,
    sharePercent: 20.5,
    focus: "Character/Creature Animation, Rigging TD, Film VFX, LookDev & Studio Pipelines",
    hubs: "Chennai, Mumbai, Bengaluru, Hyderabad, Pune (VFX & Animation Production Hubs)",
    badgeClass: "badge-maya"
  },
  substance: {
    id: "substance",
    name: "Adobe Substance 3D Painter",
    shortName: "Substance Painter",
    color: "#f59e0b", // Amber/Gold
    accentGlow: "rgba(245, 158, 11, 0.25)",
    roleCount: 9,
    sharePercent: 20.5,
    focus: "PBR Texturing, Surfacing, Material Authoring, UDIM & LookDev, Smart Materials",
    hubs: "Chennai, Bengaluru, Hyderabad, Pune (AAA Game Outsourcing, VFX Asset Departments)",
    badgeClass: "badge-substance"
  },
  marvelous: {
    id: "marvelous",
    name: "Marvelous Designer",
    shortName: "Marvelous",
    color: "#ec4899", // Rose / Pink
    accentGlow: "rgba(236, 72, 153, 0.25)",
    roleCount: 6,
    sharePercent: 13.6,
    focus: "Digital Fashion, Character Costumes, Dynamic Cloth Simulation & Soft Goods",
    hubs: "Gurugram, Chennai, Bengaluru, Pune, Mumbai, Hyderabad, Remote Fashion",
    badgeClass: "badge-marvelous"
  },
  unreal: {
    id: "unreal",
    name: "Unreal Engine 5",
    shortName: "Unreal Engine 5",
    color: "#6366f1", // Indigo
    accentGlow: "rgba(99, 102, 241, 0.25)",
    roleCount: 11,
    sharePercent: 25.0,
    focus: "Gameplay Programming, World Building, Virtual Production (ICVFX), Niagara VFX, ArchViz & Sim",
    hubs: "Chennai, Bengaluru, Hyderabad, Pune, Mumbai (AAA Game Studios, Virtual Production)",
    badgeClass: "badge-unreal"
  }
};

const ROLES_DATA = [
  // ==========================================
  // AUTODESK 3DS MAX (9 ROLES)
  // ==========================================
  {
    id: "MAX-01",
    softwareKey: "max",
    software: "Autodesk 3ds Max",
    title: "Architectural Visualization (ArchViz) Artist",
    industry: "Architecture, Real Estate, Interior Design",
    responsibilities: "Converting CAD blueprints into photorealistic exterior/interior renders and walkthroughs.",
    companionTools: ["V-Ray", "Corona Renderer", "AutoCAD", "Unreal Engine (for real-time)"],
    hubs: ["Bengaluru", "Mumbai", "Chennai", "Hyderabad", "Delhi NCR", "Remote ArchViz"],
    demandLevel: "Very High",
    level: "Mid to Senior",
    category: "ArchViz & Design",
    portfolioTip: "Showcase 3 pristine interior renders with diverse lighting setups (golden hour, night studio, overcast) alongside real-time walk-through recordings.",
    dayInTheLife: "Importing CAD/DWG floorplans, building accurate architectural geometry, applying physical materials in Corona/V-Ray, balancing exposure, and rendering multi-pass beauty shots for real estate developers."
  },
  {
    id: "MAX-02",
    softwareKey: "max",
    software: "Autodesk 3ds Max",
    title: "3D Environment & Prop Artist",
    industry: "Video Games (AAA, Mobile, VR/AR)",
    responsibilities: "Hard-surface modeling, modular environment building, UV unwrapping, and baking normal maps.",
    companionTools: ["Unreal Engine 5", "Unity", "Substance 3D Painter", "ZBrush"],
    hubs: ["Bengaluru", "Mumbai", "Chennai", "Hyderabad", "Delhi NCR", "Game Outsourcing"],
    demandLevel: "High",
    level: "Junior to Senior",
    category: "Game Art",
    portfolioTip: "Create a modular sci-fi or urban kit with trim sheets, vertex painting demonstration, and an assembled hero scene in Unreal Engine 5.",
    dayInTheLife: "Building low-poly modular walls, doors, and crates; unwrapping with optimal texel density; baking curvature and normal maps; and testing asset snapping in engine."
  },
  {
    id: "MAX-03",
    softwareKey: "max",
    software: "Autodesk 3ds Max",
    title: "Hard-Surface 3D Modeler",
    industry: "Gaming, Film, Manufacturing",
    responsibilities: "Creating high-poly and optimized low-poly mechanical assets, vehicles, weapons, and machinery.",
    companionTools: ["ZBrush", "Substance Painter", "Marmoset Toolbag"],
    hubs: ["Bengaluru", "Mumbai", "Chennai", "Hyderabad", "Delhi NCR", "Outsourcing Studios"],
    demandLevel: "High",
    level: "Mid to Senior",
    category: "3D Modeling",
    portfolioTip: "Present an intricate mechanical vehicle or sci-fi weapon with wireframe overlays, exploded part diagrams, and 4K Marmoset beauty renders.",
    dayInTheLife: "Modeling complex hard-surface chamfers with subdivision surfaces or boolean workflows, retopologizing for game engine budget, and generating normal map bakes."
  },
  {
    id: "MAX-04",
    softwareKey: "max",
    software: "Autodesk 3ds Max",
    title: "VFX & Simulation Artist",
    industry: "Film, Television, Advertising",
    responsibilities: "Generating procedural destruction, particles, cloth, fire, and rigid-body dynamics.",
    companionTools: ["tyFlow", "Phoenix FD", "Houdini", "Nuke"],
    hubs: ["Mumbai", "Hyderabad", "Chennai", "Bengaluru", "Delhi NCR"],
    demandLevel: "High",
    level: "Mid to Senior",
    category: "VFX & Sim",
    portfolioTip: "Produce a breakdown reel featuring tyFlow building fracturing, granular sand sim, and Phoenix FD fire/smoke composited in Nuke.",
    dayInTheLife: "Creating particle dynamics and destruction passes using tyFlow, simulating atmospheric volumetric smoke with Phoenix FD, and rendering OpenEXR passes."
  },
  {
    id: "MAX-05",
    softwareKey: "max",
    software: "Autodesk 3ds Max",
    title: "Product Visualization Specialist",
    industry: "E-commerce, Industrial Design, Jewelry",
    responsibilities: "Crafting high-detail virtual prototypes and studio-lit product mockups for marketing.",
    companionTools: ["KeyShot", "V-Ray", "Adobe Photoshop"],
    hubs: ["Delhi NCR", "Bengaluru", "Mumbai", "Remote Studios"],
    demandLevel: "Moderate",
    level: "Junior to Mid",
    category: "ArchViz & Design",
    portfolioTip: "Display 3 luxury consumer products (smartwatch, perfume flask, headphones) with cinematic studio lighting, turntable animations, and close-up micro-textures.",
    dayInTheLife: "Cleaning CAD geometry, setting up high-end studio lighting rigs with softboxes, dialing in dielectric glass and metallic shaders, and delivering marketing stills."
  },
  {
    id: "MAX-06",
    softwareKey: "max",
    software: "Autodesk 3ds Max",
    title: "Exhibition, Stage & Event Designer",
    industry: "Events, Retail, Set Design",
    responsibilities: "Designing 3D spatial layouts, trade show booths, concert stages, and experiential setups.",
    companionTools: ["AutoCAD", "SketchUp", "V-Ray", "Lumion"],
    hubs: ["Mumbai", "Delhi NCR", "Bengaluru", "Dubai & Remote"],
    demandLevel: "Moderate",
    level: "Mid Level",
    category: "ArchViz & Design",
    portfolioTip: "Build interactive experiential walkthroughs for an international tech expo booth or concert stage with realistic lighting trusses and brand graphics.",
    dayInTheLife: "Translating floor plans and client brand guidelines into striking 3D staging, coordinating structural dimensions, and rendering 360-degree client proposals."
  },
  {
    id: "MAX-07",
    softwareKey: "max",
    software: "Autodesk 3ds Max",
    title: "3D Generalist",
    industry: "Indie Studios, Ad Agencies, EdTech",
    responsibilities: "Handling end-to-end asset creation—modeling, texturing, lighting, basic rigging, and rendering.",
    companionTools: ["Blender", "After Effects", "Photoshop", "Substance Suite"],
    hubs: ["Pan-India Metros", "Global Remote"],
    demandLevel: "High",
    level: "All Levels",
    category: "Generalist",
    portfolioTip: "Showcase complete end-to-end micro-projects: modeling, PBR texturing, camera movement, motion graphics, and final comp in a concise 60-second showreel.",
    dayInTheLife: "Jumping between fast turnaround tasks—from quick prop modeling to lighting an ad shot, basic character skinning, and final post-production color grading."
  },
  {
    id: "MAX-08",
    softwareKey: "max",
    software: "Autodesk 3ds Max",
    title: "3D Technical Artist / Rigger",
    industry: "Gaming, Animation",
    responsibilities: "Building custom rigs (CAT / Biped), skinning characters/vehicles, and writing MAXScript/Python pipeline tools.",
    companionTools: ["Python", "MAXScript", "Unreal Engine", "Maya"],
    hubs: ["Bengaluru", "Pune", "Hyderabad", "Chennai"],
    demandLevel: "Very High",
    level: "Senior / TD",
    category: "Tech Art & Code",
    portfolioTip: "Demonstrate an automated vehicle suspension rig, modular character CAT setup with stretchy limbs, and custom UI toolscripts for batch export.",
    dayInTheLife: "Writing pipeline scripts in Python/MAXScript to automate mesh cleanup, building skeletal hierarchies, painting vertex weights, and troubleshooting engine exports."
  },
  {
    id: "MAX-09",
    softwareKey: "max",
    software: "Autodesk 3ds Max",
    title: "3D Faculty / Technical Trainer",
    industry: "EdTech, Animation & Design Institutes",
    responsibilities: "Teaching 3D modeling, lighting, and rendering pipelines to students and professionals.",
    companionTools: ["V-Ray", "Maya", "Unreal Engine", "Adobe Suite"],
    hubs: ["Pan-India (Major Metros & EdTech Hubs)"],
    demandLevel: "Moderate",
    level: "Senior",
    category: "EdTech & Training",
    portfolioTip: "Provide curriculum outlines, student showcase mentorship reels, and concise technical video tutorials explaining complex workflows like subdivision or UV mapping.",
    dayInTheLife: "Conducting hands-on masterclasses, reviewing student portfolio projects, providing critique on topology and lighting, and updating curriculum with modern industry workflows."
  },

  // ==========================================
  // AUTODESK MAYA (9 ROLES)
  // ==========================================
  {
    id: "MAYA-01",
    softwareKey: "maya",
    software: "Autodesk Maya",
    title: "3D Character & Creature Animator",
    industry: "Feature Film, TV Series, AAA Gaming, Cinematics",
    responsibilities: "Keyframe body mechanics, facial acting, lip-sync, and motion capture cleanup using Graph Editor and Trax.",
    companionTools: ["MotionBuilder", "Unreal Engine 5", "ShotGrid"],
    hubs: ["Chennai", "Mumbai", "Bengaluru", "Hyderabad", "Pune"],
    demandLevel: "Explosive",
    level: "Mid to Lead",
    category: "Animation",
    portfolioTip: "A 45-second animation reel highlighting heavy weight mechanics (e.g. creature walk/combat), subtle emotional dialogue acting, and clean arcs.",
    dayInTheLife: "Reviewing director notes in ShotGrid, blocking key poses on stepped tangents, polishing curves in the Graph Editor, refining facial phonemes, and caching for lighting."
  },
  {
    id: "MAYA-02",
    softwareKey: "maya",
    software: "Autodesk Maya",
    title: "Character & Creature Rigger / Rigging TD",
    industry: "Film VFX, Animation Studios, AAA Gaming",
    responsibilities: "Building deformation skeletons, IK/FK systems, muscle setups, and facial blendshapes.",
    companionTools: ["Python", "MEL", "ZBrush", "Unreal Engine"],
    hubs: ["Chennai", "Mumbai", "Bengaluru", "Hyderabad", "Pune"],
    demandLevel: "Explosive",
    level: "Mid to Senior / TD",
    category: "Tech Art & Code",
    portfolioTip: "Showcase an advanced quadruped creature rig with dynamic secondary muscle jiggle, ribbon spines, and an intuitive animator-friendly GUI picker.",
    dayInTheLife: "Building auto-rigging modules in Python, skinning difficult deformation zones (shoulders, elbows), sculpting corrective blendshapes, and stress-testing with animator poses."
  },
  {
    id: "MAYA-03",
    softwareKey: "maya",
    software: "Autodesk Maya",
    title: "3D Character & Creature Modeler",
    industry: "Film VFX, Gaming, Collectibles",
    responsibilities: "Retopologizing high-poly sculpts into clean animation-ready quad topology and UV layouts.",
    companionTools: ["ZBrush", "Substance 3D Painter", "Marvelous Designer"],
    hubs: ["Chennai", "Mumbai", "Bengaluru", "Hyderabad", "Pune"],
    demandLevel: "High",
    level: "Mid to Senior",
    category: "3D Modeling",
    portfolioTip: "Display 2 realistic human characters and 1 fantasy creature with full topology edge-flow breakdowns (facial loops around eyes/mouth) and UDIM tiles.",
    dayInTheLife: "Taking concept sculpts from ZBrush, retopologizing quad edge flow in Maya Quad Draw, unwrapping multi-tile UDIMs, and transferring micro-pores via displacement maps."
  },
  {
    id: "MAYA-04",
    softwareKey: "maya",
    software: "Autodesk Maya",
    title: "VFX Generalist / FX TD",
    industry: "Feature Film, OTT Series, Commercials",
    responsibilities: "Simulating cloth (nCloth), hair/fur (XGen), rigid bodies, and particle effects within studio pipelines.",
    companionTools: ["Houdini", "Nuke", "Arnold", "ShotGrid"],
    hubs: ["Chennai", "Mumbai", "Bengaluru", "Hyderabad", "Pune"],
    demandLevel: "High",
    level: "Mid to Senior / TD",
    category: "VFX & Sim",
    portfolioTip: "Feature realistic dynamic character hair grooming with XGen, interactive wind/water interaction, and nCloth simulations with collision resolution.",
    dayInTheLife: "Grooming character fur with interactive splines, setting up nCloth dynamics for complex hero costumes, resolving mesh intersections, and delivering sim alembics."
  },
  {
    id: "MAYA-05",
    softwareKey: "maya",
    software: "Autodesk Maya",
    title: "Lighting & LookDev Artist",
    industry: "Feature Film, Animation, Cinematics",
    responsibilities: "Setting up physically based shaders, look development, and multi-pass lighting for final compositing.",
    companionTools: ["Arnold", "RenderMan", "Nuke", "Substance Painter"],
    hubs: ["Chennai", "Mumbai", "Bengaluru", "Hyderabad", "Pune"],
    demandLevel: "Very High",
    level: "Mid to Lead",
    category: "Lighting & Rendering",
    portfolioTip: "Include a hero asset rendered under 4 drastically different lighting scenarios (macbeth chart calibrated, exterior direct sunlight, interior moody noir, sci-fi neon) with AOV breakdowns.",
    dayInTheLife: "Calibrating HDRI environments, establishing key/fill/rim light hierarchies in Arnold, calibrating subsurface scattering for skin, and exporting deep EXR passes to Nuke."
  },
  {
    id: "MAYA-06",
    softwareKey: "maya",
    software: "Autodesk Maya",
    title: "Pipeline Technical Director (TD)",
    industry: "Mid-to-Large VFX & Animation Studios",
    responsibilities: "Developing custom tools, asset exporters, and automated studio workflows using Maya's API.",
    companionTools: ["Python", "PySide/PyQt", "USD", "ShotGrid"],
    hubs: ["Chennai", "Mumbai", "Bengaluru", "Hyderabad", "Pune"],
    demandLevel: "Explosive",
    level: "Lead / TD",
    category: "Tech Art & Code",
    portfolioTip: "A GitHub repo or video demonstration of a custom USD asset publishing tool, PySide asset browser, or automatic render-farm submission plugin.",
    dayInTheLife: "Building studio pipeline extensions, maintaining Universal Scene Description (USD) schemas, integrating ShotGrid tracking APIs, and debugging artist tool crashes."
  },
  {
    id: "MAYA-07",
    softwareKey: "maya",
    software: "Autodesk Maya",
    title: "Previsualization (Previs) / Layout Artist",
    industry: "Film, High-End Advertising, Game Cinematics",
    responsibilities: "Blocking virtual cameras, rough character staging, lens choices, and shot pacing before final production.",
    companionTools: ["Unreal Engine 5", "After Effects", "Nuke"],
    hubs: ["Chennai", "Mumbai", "Bengaluru", "Hyderabad", "Pune"],
    demandLevel: "Moderate",
    level: "Junior to Mid",
    category: "Cinematics & Layout",
    portfolioTip: "An action sequence sequence previs reel demonstrating camera focal length decisions, parallax movement, dynamic camera shakes, and rapid storytelling pacing.",
    dayInTheLife: "Interpreting 2D storyboards into 3D cinematic camera choreography, rough-posing proxy characters, setting lens focal lengths, and cutting sequences for director approval."
  },
  {
    id: "MAYA-08",
    softwareKey: "maya",
    software: "Autodesk Maya",
    title: "3D Asset / Environment Artist",
    industry: "Animation Series, Stylized & AAA Games",
    responsibilities: "Modeling and UV-mapping props, sets, and organic assets tailored for film or real-time engines.",
    companionTools: ["ZBrush", "Substance Painter", "Unreal Engine 5"],
    hubs: ["Chennai", "Mumbai", "Bengaluru", "Hyderabad", "Pune"],
    demandLevel: "High",
    level: "Junior to Senior",
    category: "Game Art",
    portfolioTip: "A cohesive environment vignette (stylized or photorealistic) showing hero props, vegetation assets, and texture sheet distribution.",
    dayInTheLife: "Creating mid-to-high poly environment props, packing UV shells efficiently across materials, collaborating with layout artists to dress full environment sets."
  },
  {
    id: "MAYA-09",
    softwareKey: "maya",
    software: "Autodesk Maya",
    title: "3D Animation & VFX Faculty",
    industry: "Design & Media Institutes, EdTech",
    responsibilities: "Instructing students on modeling topology, rigging fundamentals, animation principles, and Arnold rendering.",
    companionTools: ["ZBrush", "Substance Painter", "Nuke", "Unreal Engine"],
    hubs: ["Pan-India (Major VFX & Animation Hubs)"],
    demandLevel: "Moderate",
    level: "Senior",
    category: "EdTech & Training",
    portfolioTip: "Educational breakdown videos explaining Disney's 12 Animation Principles inside Maya, accompanied by student success case studies and classroom reels.",
    dayInTheLife: "Teaching practical daily lab sessions, demonstrating rigging math and constraint setups, conducting mock studio portfolio reviews, and guiding capstone graduation films."
  },

  // ==========================================
  // ADOBE SUBSTANCE 3D PAINTER (9 ROLES)
  // ==========================================
  {
    id: "SUB-01",
    softwareKey: "substance",
    software: "Adobe Substance 3D Painter",
    title: "3D Texture & Surfacing Artist",
    industry: "Feature Film VFX, AAA Gaming, Animation",
    responsibilities: "Baking mesh maps, creating realistic wear-and-tear, weathering, skin/organic textures, and UDIM workflows.",
    companionTools: ["Maya", "ZBrush", "Mari", "Arnold", "Nuke"],
    hubs: ["Chennai", "Bengaluru", "Hyderabad", "Pune"],
    demandLevel: "Explosive",
    level: "Mid to Senior",
    category: "Texturing & Surfacing",
    portfolioTip: "Provide callout renders of a hero asset showing base color, roughness, metalness, and normal map passes with realistic edge chipping, dust accumulation, and grime.",
    dayInTheLife: "Baking curvature, ambient occlusion, and normal maps from high-poly sculpts; painting smart masks; building layered dirt and micro-scratches across multiple UDIMs."
  },
  {
    id: "SUB-02",
    softwareKey: "substance",
    software: "Adobe Substance 3D Painter",
    title: "3D Environment & Prop Artist",
    industry: "Video Games (AAA, Mobile, VR/AR)",
    responsibilities: "Texturing modular architecture, hero props, and foliage with optimized texture atlases and trim sheets.",
    companionTools: ["Unreal Engine 5", "Maya / 3ds Max", "Substance 3D Designer"],
    hubs: ["Chennai", "Bengaluru", "Hyderabad", "Pune"],
    demandLevel: "Very High",
    level: "Junior to Senior",
    category: "Game Art",
    portfolioTip: "A game-ready environment asset pack demonstrating tileable trim sheets, detail normals, and roughness variation for optimal draw call efficiency.",
    dayInTheLife: "Authoring PBR textures adhering strictly to texel density guidelines, packing ORM (Occlusion/Roughness/Metallic) channels for Unreal Engine, and testing in-engine."
  },
  {
    id: "SUB-03",
    softwareKey: "substance",
    software: "Adobe Substance 3D Painter",
    title: "3D Character & Creature Artist",
    industry: "Gaming, Film Cinematics, Collectibles",
    responsibilities: "Painting detailed fabric weaves, armor damage, subsurface skin maps, and grooming textures.",
    companionTools: ["ZBrush", "Maya", "Marvelous Designer", "Marmoset Toolbag"],
    hubs: ["Chennai", "Bengaluru", "Hyderabad", "Pune"],
    demandLevel: "Very High",
    level: "Mid to Senior",
    category: "Character & Fashion",
    portfolioTip: "Close-up portrait breakdowns featuring subsurface scattering melanin variation, skin pores, leather grain, and micro-fabric stitch details.",
    dayInTheLife: "Painting delicate skin pigment variations, authoring complex fabric wear layers for costumes, refining metallic specular responses, and previewing with Iray."
  },
  {
    id: "SUB-04",
    softwareKey: "substance",
    software: "Adobe Substance 3D Painter",
    title: "Look Development (LookDev) Artist",
    industry: "Film VFX, OTT Series, High-End Commercials",
    responsibilities: "Authoring complex procedural materials and balancing shader responses under studio lighting rigs.",
    companionTools: ["Maya", "Houdini", "Arnold", "Nuke", "Substance Designer"],
    hubs: ["Chennai", "Bengaluru", "Hyderabad", "Pune"],
    demandLevel: "Very High",
    level: "Mid to Lead",
    category: "Lighting & Rendering",
    portfolioTip: "Demonstrate a multi-material complex prop (glass, rusted steel, aged rubber, varnished wood) responding accurately under 3 distinct HDR lighting environments.",
    dayInTheLife: "Building smart materials with procedural anchor points, calibrating material roughness against real-world IOR values, and matching reference photography."
  },
  {
    id: "SUB-05",
    softwareKey: "substance",
    software: "Adobe Substance 3D Painter",
    title: "3D Hard-Surface / Weapon & Vehicle Artist",
    industry: "AAA Shooter & Racing Games, Simulation",
    responsibilities: "Creating photorealistic metallic finishes, edge wear, decals, carbon fiber, and mechanical grime.",
    companionTools: ["3ds Max / Maya", "ZBrush", "Marmoset Toolbag", "Unreal Engine 5"],
    hubs: ["Chennai", "Bengaluru", "Hyderabad", "Pune"],
    demandLevel: "High",
    level: "Mid to Senior",
    category: "Game Art",
    portfolioTip: "A modern or futuristic weapon asset with wear concentrated in high-friction grip/bolt zones, authentic stencil decals, and heat discoloration on the muzzle.",
    dayInTheLife: "Applying custom stencils, painting anisotropic brush marks on metals, simulating gun smoke carbon fouling, and ensuring optimized 2K/4K texture sets."
  },
  {
    id: "SUB-06",
    softwareKey: "substance",
    software: "Adobe Substance 3D Painter",
    title: "3D Product & E-Commerce Visualizer",
    industry: "Retail, Consumer Electronics, Footwear/Apparel",
    responsibilities: "Digitizing physical fabrics, leathers, plastics, and packaging finishes for virtual product catalogs.",
    companionTools: ["Blender / 3ds Max", "Substance 3D Sampler", "KeyShot", "V-Ray"],
    hubs: ["Bengaluru", "Gurugram", "Mumbai", "Chennai", "Remote"],
    demandLevel: "Moderate",
    level: "Junior to Mid",
    category: "ArchViz & Design",
    portfolioTip: "An interactive 3D web-viewer shoe or tech gadget with multiple colorways and realistic material response (knit mesh, matte TPU, polished chrome).",
    dayInTheLife: "Scanning real-world fabric swatches with Sampler, converting to seamless PBR maps, applying exact Pantone color codes, and exporting web-ready GLTF/USDZ."
  },
  {
    id: "SUB-07",
    softwareKey: "substance",
    software: "Adobe Substance 3D Painter",
    title: "Material & Technical Artist",
    industry: "Gaming, Metaverse / XR Platforms",
    responsibilities: "Building reusable Smart Materials, custom procedural generators, and channel-packed shaders (ORM/ARM).",
    companionTools: ["Substance 3D Designer", "Unreal Engine 5", "Unity", "Python"],
    hubs: ["Bengaluru", "Pune", "Hyderabad", "Chennai"],
    demandLevel: "Very High",
    level: "Senior / TD",
    category: "Tech Art & Code",
    portfolioTip: "A collection of 5 custom Smart Materials with exposed user parameters, procedural wear sliders, and automated Python export presets.",
    dayInTheLife: "Developing node graphs in Designer to feed Painter libraries, standardizing export presets across the studio, and diagnosing shader rendering artifacts in engine."
  },
  {
    id: "SUB-08",
    softwareKey: "substance",
    software: "Adobe Substance 3D Painter",
    title: "3D Generalist",
    industry: "Indie Game Studios, Ad Agencies, EdTech",
    responsibilities: "Handling end-to-end prop and character texturing alongside modeling and engine setup.",
    companionTools: ["Blender / Maya", "Unreal Engine 5", "Photoshop"],
    hubs: ["Pan-India Metros", "Global Remote"],
    demandLevel: "High",
    level: "All Levels",
    category: "Generalist",
    portfolioTip: "Show versatile texturing capabilities ranging from stylized hand-painted Overwatch-style assets to gritty photorealistic sci-fi props.",
    dayInTheLife: "UV unwrapping, jumping into Painter to texture assets in rapid iteration cycles, and dropping them into Unreal Engine to verify in game lighting."
  },
  {
    id: "SUB-09",
    softwareKey: "substance",
    software: "Adobe Substance 3D Painter",
    title: "3D Art & Texturing Faculty",
    industry: "Animation & Game Art Institutes, EdTech",
    responsibilities: "Teaching UV unwrapping standards, map baking, PBR material theory, and smart mask workflows.",
    companionTools: ["Maya", "ZBrush", "Unreal Engine 5", "Photoshop"],
    hubs: ["Pan-India (Design & Game Art Institutes)"],
    demandLevel: "Moderate",
    level: "Senior",
    category: "EdTech & Training",
    portfolioTip: "Interactive cheat-sheets on PBR workflow rules (metalness 0 or 1, reflectance values) and video lectures demonstrating anchor points and generator masks.",
    dayInTheLife: "Teaching live demo sessions on baker settings, explaining the difference between micro and macro details, and mentoring students towards AAA-quality portfolios."
  },

  // ==========================================
  // MARVELOUS DESIGNER (6 ROLES)
  // ==========================================
  {
    id: "MD-01",
    softwareKey: "marvelous",
    software: "Marvelous Designer",
    title: "3D Character & Costume Artist",
    industry: "AAA Gaming, Film Cinematics, Collectibles",
    responsibilities: "Drafting 2D sewing patterns, draping realistic layered outfits, folds, and accessories onto character meshes.",
    companionTools: ["ZBrush", "Maya", "Substance 3D Painter", "Unreal Engine 5"],
    hubs: ["Gurugram", "Chennai", "Bengaluru", "Pune", "Mumbai", "Hyderabad"],
    demandLevel: "Explosive",
    level: "Mid to Senior",
    category: "Character & Fashion",
    portfolioTip: "A multi-layered costume (jacket over hoodie, tactical pants with cargo pockets, belt straps) draped over an action pose with realistic fold tension.",
    dayInTheLife: "Drafting 2D pattern cuts from tailoring diagrams, simulating fabric drape over character avatars, pinning folds, adjusting particle distance, and exporting to ZBrush for micro-detailing."
  },
  {
    id: "MD-02",
    softwareKey: "marvelous",
    software: "Marvelous Designer",
    title: "Character FX (CFX) / Cloth Simulation Artist",
    industry: "Feature Film VFX, OTT Series, Animation",
    responsibilities: "Running dynamic cloth and soft-body simulations on animated characters, fixing intersections, and caching geometry.",
    companionTools: ["Houdini", "Maya (nCloth)", "Nuke", "Python"],
    hubs: ["Mumbai", "Hyderabad", "Chennai", "Bengaluru"],
    demandLevel: "Very High",
    level: "Mid to Senior / TD",
    category: "VFX & Sim",
    portfolioTip: "A dynamic simulation reel of long flowing capes, layered dresses, and heavy combat armor running across fast-paced dance and combat animation caches.",
    dayInTheLife: "Importing animated Alembic point caches, setting dynamic fabric physical presets (shear, stretch, bending stiffness), solving garment intersections, and baking sim caches."
  },
  {
    id: "MD-03",
    softwareKey: "marvelous",
    software: "Marvelous Designer",
    title: "3D Digital Fashion Designer / CLO 3D Artist",
    industry: "Apparel Brands, Virtual Retail, Metaverse",
    responsibilities: "Creating true-to-life digital garments, simulating fabric physics (stretch, weight, thickness), and rendering virtual lookbooks.",
    companionTools: ["CLO 3D", "Blender", "Substance 3D Sampler", "Adobe Illustrator"],
    hubs: ["Gurugram", "Bengaluru", "Mumbai", "Remote Global"],
    demandLevel: "Very High",
    level: "Junior to Senior",
    category: "Character & Fashion",
    portfolioTip: "A digital capsule collection featuring realistic street-wear or haute couture with true-to-life stitch lines, rib knits, and a digital runway turntable video.",
    dayInTheLife: "Collaborating with fashion pattern makers, adjusting seam tension, applying fabric physical property maps, setting up digital runway avatars, and rendering marketing catalogs."
  },
  {
    id: "MD-04",
    softwareKey: "marvelous",
    software: "Marvelous Designer",
    title: "3D Asset & Prop Artist (Soft Goods)",
    industry: "Video Games, ArchViz, Furniture Design",
    responsibilities: "Modeling realistic upholstery, curtains, bedsheets, pillows, flags, and tactical gear (backpacks, straps).",
    companionTools: ["3ds Max / Maya", "ZBrush", "Substance Painter"],
    hubs: ["Bengaluru", "Pune", "Hyderabad", "Chennai", "Delhi NCR"],
    demandLevel: "Moderate",
    level: "Junior to Mid",
    category: "ArchViz & Design",
    portfolioTip: "A luxury bedroom or living room soft goods collection: naturally wrinkled linen duvet, plush cushions with memory foam folds, and billowing sheer curtains.",
    dayInTheLife: "Simulating fabric drape over couch cushions and beds, introducing natural wrinkles with pressure and wind forces, exporting clean meshes for ArchViz or game props."
  },
  {
    id: "MD-05",
    softwareKey: "marvelous",
    software: "Marvelous Designer",
    title: "3D Garment Retopology & Pipeline Specialist",
    industry: "Game Outsourcing Studios, AAA Production",
    responsibilities: "Converting high-poly Marvelous Designer triangle meshes into clean, game-ready quad topology and baked normal maps.",
    companionTools: ["Maya", "ZBrush", "Marmoset Toolbag", "RizomUV"],
    hubs: ["Chennai", "Bengaluru", "Pune", "Hyderabad"],
    demandLevel: "High",
    level: "Mid Level",
    category: "3D Modeling",
    portfolioTip: "Side-by-side comparison of a 1.5 million triangle simulation mesh converted into a 25k quad game mesh with flawless normal map bake and zero texture pinching.",
    dayInTheLife: "Transferring Marvelous 2D pattern UVs to 3D quad meshes using Maya Remesh/Wrap, baking micro-wrinkles into normal maps, and setting up LODs for game engine runtime."
  },
  {
    id: "MD-06",
    softwareKey: "marvelous",
    software: "Marvelous Designer",
    title: "Freelance 3D Garment / Asset Creator",
    industry: "Indie Games, Digital Fashion Marketplaces, Ads",
    responsibilities: "Selling ready-made 3D clothing packs (ArtStation/Fab) or taking remote commissions for custom character outfits.",
    companionTools: ["ZBrush", "Substance Painter", "Blender / Unreal Engine"],
    hubs: ["Remote / Global Freelance Platforms"],
    demandLevel: "High",
    level: "All Levels",
    category: "Character & Fashion",
    portfolioTip: "A cohesive marketplace asset pack (e.g. 'Tactical Mercenary Clothing Pack') with clean promotional renders, multiple skin variations, and rigging-ready topology.",
    dayInTheLife: "Creating modular clothing sets, packaging clean ZPrj/FBX/OBJ formats, authoring promotional renders, handling client commissions, and managing digital store listings."
  },

  // ==========================================
  // UNREAL ENGINE 5 (11 ROLES)
  // ==========================================
  {
    id: "UE5-01",
    softwareKey: "unreal",
    software: "Unreal Engine 5",
    title: "Unreal Engine Gameplay Programmer",
    industry: "AAA & Indie Video Games",
    responsibilities: "Building core game mechanics, AI behavior trees, combat systems, and multiplayer replication using C++ and Blueprints.",
    companionTools: ["C++", "Visual Studio", "Perforce / Git"],
    hubs: ["Chennai", "Bengaluru", "Hyderabad", "Pune", "Mumbai"],
    demandLevel: "Explosive",
    level: "Mid to Lead",
    category: "Tech Art & Code",
    portfolioTip: "A playable third-person combat or traversal system demo featuring networked multiplayer replication, custom movement components, and AI enemy behavior trees.",
    dayInTheLife: "Architecting high-performance C++ gameplay classes, exposing clean Blueprint nodes to game designers, debugging replication sync latency, and profiling CPU tick overhead."
  },
  {
    id: "UE5-02",
    softwareKey: "unreal",
    software: "Unreal Engine 5",
    title: "Blueprint Scripter / Technical Game Designer",
    industry: "Game Studios, Interactive Agencies",
    responsibilities: "Prototyping mechanics, building UI/UMG systems, scripting level events, and implementing game logic via Blueprints.",
    companionTools: ["Maya / Blender", "Jira", "Perforce"],
    hubs: ["Chennai", "Bengaluru", "Hyderabad", "Pune", "Mumbai"],
    demandLevel: "Very High",
    level: "Junior to Senior",
    category: "Tech Art & Code",
    portfolioTip: "A fully functional game prototype (puzzle or inventory system) featuring modular Blueprint interfaces, UMG dynamic menus, and event-driven game states.",
    dayInTheLife: "Connecting level triggers, building health and inventory UI in UMG, creating interactive world objects (doors, levers, puzzles), and balancing gameplay variables."
  },
  {
    id: "UE5-03",
    softwareKey: "unreal",
    software: "Unreal Engine 5",
    title: "3D Level Designer / World Builder",
    industry: "Video Games, Metaverse / XR",
    responsibilities: "Blocking out playable levels, pacing, terrain sculpting, foliage painting, and assembling modular environments using Nanite.",
    companionTools: ["Maya / 3ds Max", "Houdini", "Quixel Megascans"],
    hubs: ["Chennai", "Bengaluru", "Hyderabad", "Pune", "Mumbai"],
    demandLevel: "Explosive",
    level: "Mid to Senior",
    category: "Game Art",
    portfolioTip: "A complete playable level blockout (greybox) showing player sightlines, flow pacing, and combat encounters, transitioning into a fully dressed Nanite environment.",
    dayInTheLife: "Sculpting landscape heightmaps, scattering Megascans foliage, placing Nanite modular structures, tuning player traversal routes, and refining collision meshes."
  },
  {
    id: "UE5-04",
    softwareKey: "unreal",
    software: "Unreal Engine 5",
    title: "Unreal Engine Technical Artist",
    industry: "Gaming, Virtual Production, Simulation",
    responsibilities: "Optimizing frame rates (profiling/draw calls), building master shaders, procedural PCG graphs, and asset import pipelines.",
    companionTools: ["Python", "Houdini", "Substance Designer", "Maya"],
    hubs: ["Chennai", "Bengaluru", "Hyderabad", "Pune", "Mumbai"],
    demandLevel: "Explosive",
    level: "Senior / TD",
    category: "Tech Art & Code",
    portfolioTip: "Demonstrate a procedural environment generated via UE5 PCG (Procedural Content Generation) framework, accompanied by custom HLSL/Material graph shaders and GPU profiling metrics.",
    dayInTheLife: "Building complex master materials with vertex painting and RVT (Runtime Virtual Texturing), diagnosing GPU bottlenecks via Unreal Insights, and scripting asset validation pipelines."
  },
  {
    id: "UE5-05",
    softwareKey: "unreal",
    software: "Unreal Engine 5",
    title: "Virtual Production / ICVFX Artist",
    industry: "Feature Film, OTT Series, Commercials",
    responsibilities: "Operating LED volume stages (nDisplay), real-time camera tracking, and live environment lighting on set.",
    companionTools: ["Nuke", "Disguise", "Live Link", "Maya"],
    hubs: ["Mumbai", "Hyderabad", "Chennai", "Bengaluru"],
    demandLevel: "Very High",
    level: "Mid to Lead",
    category: "Virtual Production",
    portfolioTip: "A behind-the-scenes breakdown showing an nDisplay multi-node setup, live camera tracking sync via Live Link, and real-time color grading for in-camera visual effects.",
    dayInTheLife: "Configuring nDisplay cluster rendering across LED walls, aligning camera frustum parallax with physical camera tracking systems, and modifying environment lighting on set in real-time."
  },
  {
    id: "UE5-06",
    softwareKey: "unreal",
    software: "Unreal Engine 5",
    title: "Real-Time Lighting & LookDev Artist",
    industry: "Gaming, Cinematics, ArchViz",
    responsibilities: "Crafting real-time global illumination and reflections using Lumen, atmosphere/fog systems, and post-process color grading.",
    companionTools: ["DaVinci Resolve", "Substance Painter", "Maya"],
    hubs: ["Chennai", "Bengaluru", "Hyderabad", "Pune", "Mumbai"],
    demandLevel: "Very High",
    level: "Mid to Senior",
    category: "Lighting & Rendering",
    portfolioTip: "Side-by-side day-to-night lighting transitions of an interior and exterior scene using Lumen real-time GI, volumetric clouds, exponential height fog, and filmic post-process LUTs.",
    dayInTheLife: "Tuning directional sun, skylight, and emissive materials; adjusting Lumen raytracing bounces; setting up exposure curves; and balancing color grading in post-process volumes."
  },
  {
    id: "UE5-07",
    softwareKey: "unreal",
    software: "Unreal Engine 5",
    title: "Real-Time ArchViz & Automotive Visualizer",
    industry: "Real Estate, Automotive, Industrial Design",
    responsibilities: "Creating interactive walkthroughs, VR property tours, and real-time car configurators with pixel streaming.",
    companionTools: ["3ds Max", "Rhino / CAD", "Twinmotion", "V-Ray"],
    hubs: ["Bengaluru", "Chennai", "Pune", "Gurugram", "Mumbai"],
    demandLevel: "Very High",
    level: "Mid to Senior",
    category: "ArchViz & Design",
    portfolioTip: "An interactive automotive configurator with real-time paint switching, interior leather trim selection, animated doors, and Web Pixel Streaming deployment.",
    dayInTheLife: "Importing CAD models via Datasmith, assigning real-time raytraced glass and metallic car paint shaders, coding UI interactions in Blueprints, and setting up pixel streaming servers."
  },
  {
    id: "UE5-08",
    softwareKey: "unreal",
    software: "Unreal Engine 5",
    title: "Niagara VFX Artist",
    industry: "Video Games, Cinematics",
    responsibilities: "Creating real-time particle systems, magic spells, explosions, weather effects, and fluid/destruction simulations in Niagara.",
    companionTools: ["Houdini", "EmberGen", "Substance Designer", "Photoshop"],
    hubs: ["Chennai", "Bengaluru", "Hyderabad", "Pune", "Mumbai"],
    demandLevel: "Explosive",
    level: "Mid to Senior",
    category: "VFX & Sim",
    portfolioTip: "A 45-second real-time VFX reel with 3 AAA effects: a stylized magical portal, a photorealistic flamethrower/explosion simulation with EmberGen, and weather particle collision.",
    dayInTheLife: "Building Niagara emitter graphs, authoring flipbook textures in EmberGen, setting up GPU particle collision with scene depth, and optimizing emitter overdraw for target framerates."
  },
  {
    id: "UE5-09",
    softwareKey: "unreal",
    software: "Unreal Engine 5",
    title: "Unreal Engine Sequencer / Cinematics Artist",
    industry: "Game Trailers, Animated Series, Film Previs",
    responsibilities: "Directing virtual cameras, blending Control Rig animations, and rendering high-frame-rate cinematics via Movie Render Queue.",
    companionTools: ["Maya", "MotionBuilder", "Nuke", "Premiere Pro"],
    hubs: ["Chennai", "Mumbai", "Bengaluru", "Hyderabad", "Pune"],
    demandLevel: "High",
    level: "Mid Level",
    category: "Cinematics & Layout",
    portfolioTip: "A 60-second high-octane cinematic trailer cut in Sequencer using Movie Render Queue, featuring depth-of-field rack focus, camera motion blur, and sound effects sync.",
    dayInTheLife: "Setting up camera tracks and rail rigs in Level Sequencer, blending motion capture animations with Control Rig tweaks, configuring high-resolution render passes, and exporting final cinematics."
  },
  {
    id: "UE5-10",
    softwareKey: "unreal",
    software: "Unreal Engine 5",
    title: "Simulation & Digital Twin Developer",
    industry: "Aerospace, Defense, Manufacturing, EdTech",
    responsibilities: "Building physics-accurate training simulators, robotics environments, and real-time industrial digital twins.",
    companionTools: ["C++", "Python", "ROS", "CAD tools"],
    hubs: ["Bengaluru", "Hyderabad", "Pune", "Chennai", "Delhi NCR"],
    demandLevel: "Very High",
    level: "Senior / TD",
    category: "Tech Art & Code",
    portfolioTip: "An industrial factory digital twin demo with real-time sensor IoT telemetry feeds mapped to 3D machinery, robotic arm kinematics, and physics simulation.",
    dayInTheLife: "Connecting external sensor API sockets to Unreal actors, integrating physics-based vehicle dynamics, building VR training scenarios, and verifying real-world simulation accuracy."
  },
  {
    id: "UE5-11",
    softwareKey: "unreal",
    software: "Unreal Engine 5",
    title: "Unreal Engine Instructor / Technical Trainer",
    industry: "Media & Game Art Institutes, EdTech",
    responsibilities: "Teaching Blueprint architecture, level design, Lumen lighting, Sequencer cinematics, and real-time optimization.",
    companionTools: ["Maya", "Blender", "Substance Painter", "Nuke"],
    hubs: ["Pan-India (Major Metros & Game Hubs)"],
    demandLevel: "Moderate",
    level: "Senior",
    category: "EdTech & Training",
    portfolioTip: "Structured masterclass curriculum videos breaking down Blueprint fundamentals, Nanite geometry optimizations, and Lumen interior lighting techniques.",
    dayInTheLife: "Leading interactive technical bootcamps, reviewing game design documents and Blueprint graphs, mentoring aspiring game artists, and creating instructional step-by-step documentation."
  }
];

// Ecosystem Analytics & Hub Distribution Data
const ECOSYSTEM_STATS = {
  totalSuites: 5,
  totalRoles: 44,
  coreIndustries: ["Gaming", "VFX", "ArchViz", "Fashion", "Sim", "EdTech", "XR/Metaverse"],
  topHubs: [
    { name: "Bengaluru", count: 32, note: "Top Game Dev, ArchViz & Tech Hub" },
    { name: "Chennai", count: 30, note: "Major Game Outsourcing & VFX Hub" },
    { name: "Mumbai", count: 28, note: "Film VFX, Virtual Production & Advertising" },
    { name: "Hyderabad", count: 26, note: "VFX, Gaming & Tech Infrastructure" },
    { name: "Pune", count: 24, note: "Game Co-Dev & Automotive 3D" },
    { name: "Delhi NCR", count: 18, note: "ArchViz, E-Commerce & Media" },
    { name: "Global Remote", count: 12, note: "Digital Fashion & International Outsourcing" }
  ],
  popularCompanionTools: [
    { name: "Unreal Engine 5", count: 16 },
    { name: "Maya", count: 16 },
    { name: "ZBrush", count: 14 },
    { name: "Substance Painter", count: 12 },
    { name: "Python", count: 8 },
    { name: "Nuke", count: 8 },
    { name: "Houdini", count: 6 },
    { name: "V-Ray", count: 5 }
  ],
  pipelines: [
    {
      id: "pipeline-game",
      title: "AAA & Indie Game Art Pipeline",
      description: "From concept sculpt to modular world assembly and gameplay logic inside Unreal Engine 5.",
      steps: [
        { phase: "Pre-Production", role: "Concept & Art Direction", software: "Photoshop / Blender" },
        { phase: "Asset Creation", role: "Hard-Surface & Creature Sculpting", software: "3ds Max / Maya / ZBrush" },
        { phase: "Costume & Garments", role: "3D Character Cloth Drafting", software: "Marvelous Designer" },
        { phase: "PBR Surfacing", role: "Map Baking & Smart Texturing", software: "Adobe Substance 3D Painter" },
        { phase: "Integration & World", role: "Nanite World Building & Level Dressing", software: "Unreal Engine 5" },
        { phase: "Real-Time Dynamics", role: "Niagara VFX & Lumen Lighting", software: "Unreal Engine 5" },
        { phase: "Gameplay Systems", role: "C++ & Blueprint Programming", software: "Unreal Engine 5" }
      ]
    },
    {
      id: "pipeline-vfx",
      title: "Feature Film & OTT VFX Pipeline",
      description: "High-end creature animation, CFX simulation, physical lookdev and ICVFX virtual production stages.",
      steps: [
        { phase: "Previs & Layout", role: "Camera Choreography & Staging", software: "Autodesk Maya / UE5" },
        { phase: "Asset & Modeling", role: "Production Quad Topology & Displacements", software: "Maya / ZBrush" },
        { phase: "Rigging TD", role: "Muscle Deformations & Facial Blendshapes", software: "Autodesk Maya / Python" },
        { phase: "Character FX (CFX)", role: "Dynamic Cloth & Soft Body Sim", software: "Marvelous Designer / Maya" },
        { phase: "Character Animation", role: "High-End Keyframe & Mocap Acting", software: "Autodesk Maya" },
        { phase: "Lighting & LookDev", role: "Physical Shading & Multi-Pass Arnold", software: "Maya / Arnold / Substance" },
        { phase: "Virtual Production", role: "In-Camera VFX (ICVFX) on LED Stages", software: "Unreal Engine 5 / nDisplay" }
      ]
    },
    {
      id: "pipeline-archviz",
      title: "ArchViz & Real-Time Digital Twin Pipeline",
      description: "Translating CAD blueprints into photorealistic offline renders and real-time interactive metaverse tours.",
      steps: [
        { phase: "Blueprints", role: "CAD & Architectural Drafting", software: "AutoCAD / Revit" },
        { phase: "Modeling", role: "Exterior & Interior Structure Building", software: "Autodesk 3ds Max" },
        { phase: "Soft Goods", role: "Realistic Bedding, Curtains & Pillows", software: "Marvelous Designer" },
        { phase: "Photorealistic Render", role: "Interior Lighting & Global Illumination", software: "3ds Max + Corona / V-Ray" },
        { phase: "Real-Time Twin", role: "Interactive Walkthrough & Pixel Streaming", software: "Unreal Engine 5" }
      ]
    },
    {
      id: "pipeline-fashion",
      title: "Digital Fashion & Virtual Retail Pipeline",
      description: "Virtual garment prototyping, true-to-life cloth drape physics, and digital runway metaverse marketing.",
      steps: [
        { phase: "Pattern Drafting", role: "2D Tailoring & Cut Formulation", software: "Marvelous Designer / CLO 3D" },
        { phase: "Fabric Physics", role: "Shear, Stretch & Bending Calibrations", software: "Marvelous Designer" },
        { phase: "PBR Weave Surfacing", role: "Knit & Weave Micro-Texturing", software: "Substance 3D Sampler / Painter" },
        { phase: "Game Retopology", role: "Quad Flow Conversion & Normal Bakes", software: "Maya / ZBrush / RizomUV" },
        { phase: "Virtual Lookbook", role: "Metaverse Avatar Presentation & Video", software: "Blender / Unreal Engine 5" }
      ]
    }
  ]
};

// Export variables if in module environment, or attach to global window
if (typeof window !== "undefined") {
  window.SOFTWARE_METADATA = SOFTWARE_METADATA;
  window.ROLES_DATA = ROLES_DATA;
  window.ECOSYSTEM_STATS = ECOSYSTEM_STATS;
}
