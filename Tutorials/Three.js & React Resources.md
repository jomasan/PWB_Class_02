# Three.js & React — Resources & Inspiration

A curated list of docs, demos, and galleries to help you imagine what's possible with Three.js and React. Start with the galleries if you learn best by seeing — they're the fastest way to get ideas.

---

## Start Here

| Resource | Why it's useful |
|----------|-----------------|
| [Three.js Journey](https://threejs-journey.com/) | Best structured course for Three.js fundamentals (paid, but widely recommended) |
| [Three.js Docs](https://threejs.org/docs/) | Official reference — scenes, cameras, lights, materials |
| [Three.js Examples](https://threejs.org/examples/) | 700+ official demos — search by topic (shadows, loaders, post-processing) |
| [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) | How React wraps Three.js — this is what your app uses |
| [Drei Docs](https://drei.docs.pmnd.rs/) | Ready-made helpers (OrbitControls, environments, text, etc.) |

---

## Inspiration Galleries

Sites that showcase what people actually build — scroll these when you're stuck for project ideas.

| Site | What you'll find |
|------|------------------|
| [Awwwards — WebGL](https://www.awwwards.com/websites/webgl/) | Award-winning interactive sites (brands, portfolios, campaigns) |
| [FWA — WebGL](https://thefwa.com/cases?category=webgl) | Favourite Website Awards — high-end creative web projects |
| [Codrops](https://tympanus.net/codrops/) | Tutorials + demos with source code; great for dissecting techniques |
| [Three.js Showcase](https://threejs.org/) | Featured projects on the Three.js homepage |
| [Made with React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/showcase) | Official R3F showcase — games, tools, art, data viz |
| [Bruno Simon's Portfolio](https://bruno-simon.com/) | Famous driving-game portfolio — shows 3D as a full website experience |
| [Active Theory](https://activetheory.net/work) | Studio known for immersive WebGL experiences |

---

## Experimental & Creative Coding

Where artists and developers push what's possible in the browser.

| Resource | What you'll find |
|----------|------------------|
| [Shadertoy](https://www.shadertoy.com/) | GPU shader experiments — pure math visuals (can be ported to Three.js) |
| [Chrome Experiments](https://experiments.withgoogle.com/collection/webgl) | Google's WebGL experiment archive |
| [OpenProcessing — WebGL](https://openprocessing.org/browse/?q=webgl) | Community sketches; many use p5.js or Three.js |
| [Neort.io](https://neort.io/) | Digital art platform — live WebGL / creative coding pieces |
| [Sketchfab](https://sketchfab.com/feed) | 3D model gallery — useful for loading `.glb` models into your scene |
| [Poly Pizza](https://poly.pizza/) | Free low-poly 3D models (`.glb`) — good for quick experiments |
| [Ken Perlin's demos](https://mrl.nyu.edu/~perlin/) | Classic procedural graphics inspiration |

---

## Example Projects to Study (GitHub)

Clone these, run them locally, and change one thing at a time.

| Repo | What it demonstrates |
|------|----------------------|
| [pmndrs/react-three-fiber](https://github.com/pmndrs/react-three-fiber) | Core library + links to examples |
| [pmndrs/drei](https://github.com/pmndrs/drei) | Helper components with live Storybook demos |
| [pmndrs/react-three-rapier](https://github.com/pmndrs/react-three-rapier) | Physics (gravity, collisions, stacking objects) |
| [pmndrs/leva](https://github.com/pmndrs/leva) | Debug panel with sliders — like TouchDesigner params in the browser |
| [wassupjay/necronaut](https://github.com/wassupjay/necronaut) | R3F + post-processing aesthetic |
| [N8python/voxelizer](https://github.com/N8python/voxelizer) | Voxel-style 3D from images |
| [utsuboco/r3f-perf](https://github.com/utsuboco/r3f-perf) | Performance monitor for R3F scenes |

---

## Techniques Worth Exploring

Ideas mapped to what they unlock — pick one when you want a next step for this project.

| Technique | Possibilities |
|-----------|---------------|
| **OrbitControls** *(you have this)* | Inspect any 3D object interactively |
| **GLTF / GLB loaders** | Import Blender, Spline, or Sketchfab models |
| **Instancing** | Thousands of objects (particles, trees, crowds) with good performance |
| **Shaders (GLSL)** | Custom materials — distortion, holograms, liquid, glitch |
| **Post-processing** | Bloom, film grain, depth of field — cinematic look |
| **Physics (Rapier)** | Objects that fall, bounce, and collide |
| **Audio reactivity** | Visuals driven by microphone or music |
| **Scroll / mouse parallax** | 3D tied to page scroll or cursor position |
| **Data visualization** | 3D charts, networks, geographic maps |
| **VR / AR (WebXR)** | Headset or phone AR experiences |
| **React state → 3D** | Sliders in your side panel controlling rotation, color, scale |

---

## Tutorials & Free Learning

| Resource | Format |
|----------|--------|
| [Three.js Journey](https://threejs-journey.com/) | Video course (paid) |
| [Poimandres examples](https://docs.pmnd.rs/react-three-fiber/getting-started/examples) | Copy-paste R3F code snippets |
| [Looped Labs (YouTube)](https://www.youtube.com/@Looped_Labs) | R3F project walkthroughs |
| [Wawa Sensei (YouTube)](https://www.youtube.com/@wawasensei) | Three.js + R3F tutorials |
| [Fireship — Three.js in 100 seconds](https://www.youtube.com/watch?v=Q7AOvHpIVOM) | Quick overview |
| [Simon Dev — Three.js tutorials](https://www.youtube.com/@simondev0) | Deep dives on graphics concepts |
| [Immersion by Bruno Simon](https://www.immersion.supply/) | Free Three.js course chapters |

---

## Libraries in the Ecosystem

These plug into React Three Fiber and expand what you can build.

| Library | Use for |
|---------|---------|
| [@react-three/drei](https://drei.docs.pmnd.rs/) | Controls, loaders, text, environments, helpers |
| [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing) | Visual effects (bloom, vignette, noise) |
| [@react-three/rapier](https://github.com/pmndrs/react-three-rapier) | Physics simulation |
| [@react-three/xr](https://github.com/pmndrs/react-xr) | VR / AR |
| [leva](https://github.com/pmndrs/leva) | Live parameter panels (great match for your side panel UI) |
| [maath](https://github.com/pmndrs/maath) | Math utilities for animation and geometry |
| [zustand](https://github.com/pmndrs/zustand) | Simple state management between React UI and 3D scene |
| [react-spring / @react-three/fiber animated](https://www.react-spring.dev/) | Smooth animations |

---

## Communities

| Community | Link |
|-----------|------|
| Poimandres Discord (R3F) | [discord.gg/poimandres](https://discord.gg/poimandres) |
| Three.js Discourse forum | [discourse.threejs.org](https://discourse.threejs.org/) |
| r/threejs | [reddit.com/r/threejs](https://www.reddit.com/r/threejs/) |
| r/webgl | [reddit.com/r/webgl](https://www.reddit.com/r/webgl/) |
| Creative Coding Club | [creativecodingclub.com](https://creativecodingclub.com/) |

---

## Project Ideas for This App

Small, achievable next steps that fit your current setup (cube + side panel + orbit camera):

1. **Wire up the sliders** — rotation and scale controlled from the side panel
2. **Swap the cube for a `.glb` model** — download from Poly Pizza or Sketchfab
3. **Add Leva or custom sliders** — color, metalness, roughness on the material
4. **Particle field** — hundreds of small dots orbiting the center
5. **Audio visualizer** — bars or a sphere that reacts to microphone input
6. **Procedural terrain** — low-poly landscape with `@react-three/drei` helpers
7. **Post-processing bloom** — make the green accent cube glow
8. **Click to spawn objects** — add a cube wherever you click in 3D space

---

## How to Use This List

1. **Browse a gallery** (Awwwards, FWA, R3F showcase) for 10 minutes — save anything that excites you
2. **Pick one technique** from the table above that matches something you liked
3. **Find the closest example** in Three.js examples or Poimandres docs
4. **Port one feature** into your `my-react-app` scene — don't rebuild the whole thing

You don't need to master everything. One shader, one loader, or one physics demo at a time is enough.

---

*Last updated: March 2026*
