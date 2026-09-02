import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ExternalLink, Eye } from 'lucide-react';
import { triggerCelebrationConfetti } from './ConfettiEffect';

export interface SalesforceTechNode {
  id: string;
  title: string;
  category: string;
  badgeText: string;
  colorHex: number;
  cssColor: string;
  textColor: string;
  url: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export const SF_TECH_NODES: SalesforceTechNode[] = [
  {
    id: 'agentforce',
    title: 'Agentforce & Autonomous AI',
    category: 'Autonomous Agentic AI',
    badgeText: 'Next-Gen AI',
    colorHex: 0x00A1E0, // Electric Salesforce Blue
    cssColor: '#00A1E0',
    textColor: '#FFFFFF',
    url: 'https://www.salesforce.com/agentforce/',
    subtitle: 'Autonomous Agent Execution & Reasoning Engine',
    description: 'Grounding autonomous agentic workflows with dynamic action routing and enterprise safety guards.',
    iconName: 'Bot'
  },
  {
    id: 'datacloud',
    title: 'Salesforce Data Cloud',
    category: 'Hyperforce Real-Time Engine',
    badgeText: 'Vector Lakehouse',
    colorHex: 0x032D60, // Deep Salesforce Navy Blue
    cssColor: '#032D60',
    textColor: '#FFFFFF',
    url: 'https://www.salesforce.com/data/',
    subtitle: 'Zero-Copy Architecture & Identity Resolution',
    description: 'Unified real-time customer graph, calculated insights, and vector database AI embeddings.',
    iconName: 'Database'
  },
  {
    id: 'fsc',
    title: 'Financial Services Cloud (FSC)',
    category: 'Industry Cloud Architecture',
    badgeText: 'Core Specialty',
    colorHex: 0x0176D3, // Classic Salesforce Blue
    cssColor: '#0176D3',
    textColor: '#FFFFFF',
    url: 'https://www.salesforce.com/products/financial-services-cloud/',
    subtitle: 'Cloud-Native Loan Origination (LOS) & Banking',
    description: 'Architecting high-trust financial accounts, 20+ bureau integrations, and regulatory compliance.',
    iconName: 'Landmark'
  },
  {
    id: 'claudeforce',
    title: 'ClaudeForce & Trust Layer',
    category: 'LLM Orchestration',
    badgeText: 'Anthropic Claude + SF',
    colorHex: 0x00E5FF, // Luminous Cyan Blue
    cssColor: '#00E5FF',
    textColor: '#1E261F',
    url: 'https://www.salesforce.com/artificial-intelligence/',
    subtitle: 'Anthropic Claude AI in Salesforce Ecosystem',
    description: 'Deep reasoning LLMs orchestrated with Einstein Trust Layer data masking and zero-retention audit.',
    iconName: 'Sparkles'
  },
  {
    id: 'revenue-cloud',
    title: 'Revenue Cloud & Einstein CPQ',
    subtitle: 'Complex Product & Pricing Engines',
    category: 'Quote-to-Cash Automation',
    badgeText: 'Certified Specialist',
    colorHex: 0x1589EE, // Royal Cobalt Blue
    cssColor: '#1589EE',
    textColor: '#FFFFFF',
    url: 'https://www.salesforce.com/products/revenue/',
    description: 'Multi-tiered pricing matrices, dynamic product bundles, and 30%-95% compressed QTC cycles.',
    iconName: 'Layers'
  },
  {
    id: 'omnistudio',
    title: 'OmniStudio & Custom LWC',
    category: 'Digital Journey Engine',
    badgeText: 'High Throughput',
    colorHex: 0x5EB1FF, // Vibrant Sky Blue
    cssColor: '#5EB1FF',
    textColor: '#1E261F',
    url: 'https://help.salesforce.com/s/articleView?id=sf.os_omnistudio.htm',
    subtitle: 'OmniScript, FlexCards & Turbo DataRaptors',
    description: 'Engineering sub-second declarative journeys serving 60K+ citizens and enterprise portals.',
    iconName: 'Workflow'
  },
  {
    id: 'einstein1',
    title: 'Einstein 1 Studio & Prompt Builder',
    category: 'Platform Intelligence',
    badgeText: 'AI Copilot Studio',
    colorHex: 0x0B5CAB, // Deep Sapphire Blue
    cssColor: '#0B5CAB',
    textColor: '#FFFFFF',
    url: 'https://www.salesforce.com/products/einstein-1-platform/',
    subtitle: 'Custom Prompt Templates & LLM Gateways',
    description: 'Designing context-grounded AI actions, automated summarization, and copilot extensions.',
    iconName: 'Cpu'
  }
];

export const Salesforce3DCloud: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredTech, setHoveredTech] = useState<SalesforceTechNode | null>(null);
  const [activeTechId, setActiveTechId] = useState<string>('agentforce');

  const sphereMeshesRef = useRef<THREE.Mesh[]>([]);

  const handleOpenTech = (tech: SalesforceTechNode) => {
    triggerCelebrationConfetti();
    window.open(tech.url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8.8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    currentMount.appendChild(renderer.domElement);

    // Salesforce Cloud Main Pivot Group
    const cloudGroup = new THREE.Group();
    scene.add(cloudGroup);

    // Organic Salesforce Cloud Configuration in Different Shades of Blue
    const cloudSpheresConfig = [
      { x: 0, y: 0.25, z: 0, radius: 1.4, techIndex: 0 },       // Agentforce (Electric Blue)
      { x: -1.25, y: -0.1, z: 0.2, radius: 1.12, techIndex: 1 }, // Data Cloud (Navy Blue)
      { x: 1.25, y: -0.1, z: 0.2, radius: 1.12, techIndex: 2 },  // FSC (Classic Blue)
      { x: -0.75, y: 0.85, z: -0.1, radius: 1.0, techIndex: 3 }, // ClaudeForce (Luminous Cyan)
      { x: 0.75, y: 0.85, z: -0.1, radius: 1.0, techIndex: 4 },  // Revenue Cloud (Royal Cobalt)
      { x: -1.95, y: -0.5, z: 0.05, radius: 0.85, techIndex: 5 }, // OmniStudio (Sky Blue)
      { x: 1.95, y: -0.5, z: 0.05, radius: 0.85, techIndex: 6 },  // Einstein 1 (Deep Sapphire)
      { x: 0, y: -0.65, z: 0.25, radius: 0.95, techIndex: 0 }     // Center Base (Electric Blue)
    ];

    const meshes: THREE.Mesh[] = [];

    cloudSpheresConfig.forEach((cfg) => {
      const tech = SF_TECH_NODES[cfg.techIndex % SF_TECH_NODES.length];
      const geom = new THREE.SphereGeometry(cfg.radius, 36, 36);

      // Distinct Glass-Physical Material for each Blue Shade
      const mat = new THREE.MeshPhysicalMaterial({
        color: tech.colorHex,
        emissive: tech.colorHex,
        emissiveIntensity: 0.22,
        roughness: 0.2,
        metalness: 0.15,
        transmission: 0.35,
        ior: 1.45,
        thickness: 1.2,
        clearcoat: 1.0,
        clearcoatRoughness: 0.08,
      });

      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(cfg.x * 0.92, cfg.y * 0.92, cfg.z * 0.92);

      mesh.userData = {
        tech: tech,
        baseScale: 1.0,
        targetScale: 1.0,
        baseEmissiveIntensity: 0.22,
        targetEmissiveIntensity: 0.22,
      };

      cloudGroup.add(mesh);
      meshes.push(mesh);
    });

    sphereMeshesRef.current = meshes;

    // Add Orbiting Luminous Data Particles in Blue & Gold
    const particleCount = 110;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const bluePalette = [
      new THREE.Color(0x00A1E0),
      new THREE.Color(0x00E5FF),
      new THREE.Color(0x5EB1FF),
      new THREE.Color(0xC5A059),
      new THREE.Color(0x1589EE)
    ];

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 3.3 + Math.random() * 2.2;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const color = bluePalette[Math.floor(Math.random() * bluePalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.09,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Multi-Point Atmospheric Lighting in Shades of Blue & Soft Sunlight
    const ambientLight = new THREE.AmbientLight(0xF6F4EE, 2.0);
    scene.add(ambientLight);

    const mainDirectional = new THREE.DirectionalLight(0xffffff, 2.8);
    mainDirectional.position.set(5, 7, 7);
    scene.add(mainDirectional);

    // Electric Blue Fill Light
    const cyanLight = new THREE.PointLight(0x00E5FF, 4.0, 12);
    cyanLight.position.set(-4, -2, 4);
    scene.add(cyanLight);

    // Deep Royal Blue Rim Light
    const royalBlueLight = new THREE.PointLight(0x0176D3, 3.5, 10);
    royalBlueLight.position.set(4, -3, -3);
    scene.add(royalBlueLight);

    // Top Gold Halo Light
    const goldHaloLight = new THREE.PointLight(0xC5A059, 2.0, 8);
    goldHaloLight.position.set(0, 5, -2);
    scene.add(goldHaloLight);

    // Raycasting & Pointer Interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-1000, -1000);
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onPointerMove = (event: MouseEvent) => {
      if (!currentMount) return;
      const rect = currentMount.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      mouse.x = (x / rect.width) * 2 - 1;
      mouse.y = -(y / rect.height) * 2 + 1;

      targetRotationY = mouse.x * 0.55;
      targetRotationX = -mouse.y * 0.35;

      // Raycast check
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object as THREE.Mesh;
        const tech = hitMesh.userData.tech as SalesforceTechNode;
        setHoveredTech(tech);
        setActiveTechId(tech.id);
        currentMount.style.cursor = 'pointer';

        meshes.forEach((m) => {
          if (m === hitMesh) {
            m.userData.targetScale = 1.15;
            m.userData.targetEmissiveIntensity = 0.85;
          } else {
            m.userData.targetScale = 0.96;
            m.userData.targetEmissiveIntensity = 0.15;
          }
        });
      } else {
        setHoveredTech(null);
        currentMount.style.cursor = 'grab';
        meshes.forEach((m) => {
          m.userData.targetScale = 1.0;
          m.userData.targetEmissiveIntensity = 0.22;
        });
      }
    };

    const onPointerClick = (event: MouseEvent) => {
      if (!currentMount) return;
      const rect = currentMount.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      mouse.x = (x / rect.width) * 2 - 1;
      mouse.y = -(y / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object as THREE.Mesh;
        const tech = hitMesh.userData.tech as SalesforceTechNode;
        handleOpenTech(tech);
      }
    };

    currentMount.addEventListener('mousemove', onPointerMove);
    currentMount.addEventListener('click', onPointerClick);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle floating oscillation
      cloudGroup.position.y = Math.sin(elapsedTime * 1.3) * 0.14;

      // Smooth rotation lerp to mouse position
      cloudGroup.rotation.y += (targetRotationY - cloudGroup.rotation.y + Math.sin(elapsedTime * 0.35) * 0.12) * 0.05;
      cloudGroup.rotation.x += (targetRotationX - cloudGroup.rotation.x) * 0.05;
      cloudGroup.rotation.z = Math.sin(elapsedTime * 0.7) * 0.03;

      // Rotate particle constellation
      particles.rotation.y = elapsedTime * 0.07;
      particles.rotation.x = elapsedTime * 0.03;

      // Smoothly animate mesh scales and emissive glows on hover
      meshes.forEach((m) => {
        const scaleLerp = THREE.MathUtils.lerp(m.scale.x, m.userData.targetScale, 0.1);
        m.scale.set(scaleLerp, scaleLerp, scaleLerp);

        const mat = m.material as THREE.MeshPhysicalMaterial;
        mat.emissiveIntensity = THREE.MathUtils.lerp(
          mat.emissiveIntensity,
          m.userData.targetEmissiveIntensity,
          0.1
        );
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      currentMount.removeEventListener('mousemove', onPointerMove);
      currentMount.removeEventListener('click', onPointerClick);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const activeTech = SF_TECH_NODES.find(t => t.id === activeTechId) || SF_TECH_NODES[0];
  const displayedTech = hoveredTech || activeTech;

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* 3D WebGL Canvas Viewport */}
      <div className="relative w-full h-[340px] sm:h-[400px] flex items-center justify-center select-none overflow-hidden rounded-2xl bg-radial from-[#00A1E0]/5 via-transparent to-transparent">
        <div ref={mountRef} className="w-full h-full" />

        {/* Live HUD Tooltip for Hovered / Active Salesforce Technology */}
        <div className="absolute top-4 left-4 right-4 sm:left-6 sm:right-auto max-w-sm pointer-events-auto">
          <div
            onClick={() => handleOpenTech(displayedTech)}
            className="p-3.5 rounded-2xl glass-panel-warm border border-[#E5E0D5] shadow-lg cursor-pointer hover:border-[#00A1E0] hover:shadow-xl transition-all group animate-in fade-in zoom-in-95 duration-200 text-left"
          >
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full shrink-0 shadow-sm animate-pulse"
                  style={{ backgroundColor: displayedTech.cssColor }}
                />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E261F]">
                  {displayedTech.category}
                </span>
              </div>
              <span
                className="px-2 py-0.5 rounded-full text-[10px] font-bold border"
                style={{
                  backgroundColor: `${displayedTech.cssColor}15`,
                  color: displayedTech.cssColor === '#00E5FF' ? '#007AA6' : displayedTech.cssColor,
                  borderColor: `${displayedTech.cssColor}40`
                }}
              >
                {displayedTech.badgeText}
              </span>
            </div>

            <h3 className="text-sm font-bold text-[#1E261F] group-hover:text-[#0176D3] transition-colors flex items-center gap-1.5">
              <span>{displayedTech.title}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#00A1E0] group-hover:translate-x-0.5 transition-transform" />
            </h3>

            <p className="text-[11px] text-[#4A554A] mt-1 leading-snug line-clamp-2">
              {displayedTech.subtitle}
            </p>

            <div className="mt-2.5 pt-2 border-t border-[#E5E0D5]/70 flex items-center justify-between text-[10px] font-semibold text-[#00A1E0]">
              <span>Click node to open link ↗</span>
              <span className="text-stone-500 font-mono">New Tab</span>
            </div>
          </div>
        </div>

        {/* Instruction Badge at Bottom */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/90 text-[10px] font-mono text-[#1E261F] border border-[#E5E0D5] shadow-xs pointer-events-none flex items-center gap-1.5 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-[#00A1E0] animate-ping" />
          <span>Click any 3D blue lobe to explore Salesforce innovations</span>
        </div>
      </div>

      {/* Interactive Quick-Select Chips (Different Shades of Blue) */}
      <div className="w-full mt-4 pt-3 border-t border-[#E5E0D5]/70">
        <div className="text-[11px] font-bold uppercase tracking-wider text-[#4E614B] mb-2.5 text-left flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5" />
          <span>Salesforce Blue Innovation Ecosystem (Click to Launch):</span>
        </div>

        <div className="flex flex-wrap gap-2 justify-start">
          {SF_TECH_NODES.map((tech) => {
            const isSelected = activeTechId === tech.id;
            return (
              <button
                key={tech.id}
                onClick={() => {
                  setActiveTechId(tech.id);
                  handleOpenTech(tech);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all border shadow-2xs ${
                  isSelected
                    ? 'bg-[#1E261F] text-white border-[#1E261F] shadow-sm ring-2 ring-[#00A1E0]/30 scale-102'
                    : 'bg-white hover:bg-[#FAF8F5] text-[#1E261F] border-[#E5E0D5] hover:border-[#00A1E0]'
                }`}
                title={`Open ${tech.title} in new tab`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0 shadow-xs"
                  style={{ backgroundColor: tech.cssColor }}
                />
                <span className="text-[11px]">{tech.title.split('&')[0].trim()}</span>
                <ExternalLink className="w-3 h-3 text-[#00A1E0] opacity-80" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
