import React from 'react';
import { ThreeCanvasContainer, CinematicCamera } from '@3d-assets/remotion';
import { DioramaSunlight } from '@3d-assets/core';
import {
  UrbanCityDiorama,
  HighRiseTower,
  Townhouse,
  LowPolyCar,
  LowPolyScooter,
  LowPolyCharacter,
  LowPolyCloud,
  TechnicalCallout3D,
} from '@3d-assets/assets';

/**
 * Flagship Urban Cityscape 3D Diorama (9:16 Vertical, 5s @ 30fps)
 * Features dynamic vehicles, pedestrians, architectural towers, and technical annotations.
 */
export const UrbanCityScene: React.FC = () => {
  return (
    <ThreeCanvasContainer clearColor="#e8dfd5">
      {/* 1. Warm Natural Sunlight & Soft Shadows */}
      <DioramaSunlight intensity={1.35} sunPosition={[11, 17, 10]} />

      {/* 2. Elevated 3/4 Isometric Camera with Subtle Handheld Drift */}
      <CinematicCamera
        mode="handheldDrift"
        position={[6.5, 11.0, 18.0]}
        target={[0, 1.2, 0]}
        fov={46}
        shakeIntensity={0.04}
      />

      {/* 3. Floating Low-Poly Geometric Clouds */}
      <LowPolyCloud position={[-6.5, 10.5, -5.5]} scale={1.3} driftSpeed={0.35} />
      <LowPolyCloud position={[3.5, 11.5, -6.5]} scale={1.0} driftSpeed={0.22} />

      {/* 4. Complete Urban City Diorama Foundation Slab with Roads & Sidewalks */}
      <UrbanCityDiorama width={18} depth={15} position={[0, 0, 0]} showProps={true} />

      {/* 5. Architectural Cityscape (Skyscrapers & Townhouses) */}
      {/* Central High-Rise Glass Towers */}
      <HighRiseTower
        position={[-3.8, 0.2, -4.8]}
        height={11.0}
        width={3.2}
        depth={3.0}
        facadeColor="#64748b"
        windowColor="#38bdf8"
      />
      <HighRiseTower
        position={[4.2, 0.2, -5.0]}
        height={9.5}
        width={2.8}
        depth={2.8}
        facadeColor="#94a3b8"
        windowColor="#0284c7"
      />

      {/* Streetfront Townhouses with Terracotta Roofs & Awnings */}
      <Townhouse
        position={[0.2, 0.2, -4.5]}
        floors={3}
        wallColor="#fdfbf7"
        roofColor="#c85a42"
        hasAwning={true}
      />
      <Townhouse
        position={[-7.2, 0.2, -4.5]}
        floors={2}
        wallColor="#e2e8f0"
        roofColor="#b91c1c"
        hasAwning={false}
      />
      <Townhouse
        position={[7.5, 0.2, -4.5]}
        floors={2}
        wallColor="#f8fafc"
        roofColor="#ea580c"
        hasAwning={true}
      />

      {/* 6. Active Vehicles in Motion (Deterministic Trajectories) */}
      {/* Yellow City Taxi moving Eastbound (+X) */}
      <LowPolyCar
        variant="taxi"
        color="#facc15"
        speed={2.6}
        startPosition={[-6.0, 0.22, 1.1]}
        direction={1}
        scale={0.85}
      />

      {/* Blue Scooter Rider moving Westbound (-X) */}
      <LowPolyScooter
        bodyColor="#0284c7"
        speed={2.2}
        startPosition={[5.5, 0.22, -1.1]}
        direction={-1}
        scale={0.75}
        riderVariant="casual"
      />

      {/* 7. Pedestrians on the Sidewalks */}
      {/* Worker character waving at the crosswalk */}
      <LowPolyCharacter
        variant="worker"
        action="wave"
        position={[2.0, 0.2, 2.7]}
        scale={0.82}
        rotationY={-0.6}
      />

      {/* Casual pedestrian walking along the sidewalk */}
      <LowPolyCharacter
        variant="casual"
        action="walk"
        position={[-1.5, 0.2, 2.7]}
        scale={0.82}
        rotationY={Math.PI / 2}
      />

      {/* 8. Technical Explainer Callout Annotations */}
      <TechnicalCallout3D
        title="SMART METRO HUB"
        anchorPosition={[1.5, 0.2, 0]}
        badgeOffset={[1.6, 2.2, 0]}
        startFrame={18}
        badgeColor="#0284c7"
      />
      <TechnicalCallout3D
        title="TRAFFIC FLOW"
        anchorPosition={[2.4, 2.4, -2.4]}
        badgeOffset={[-1.5, 1.3, 0]}
        startFrame={32}
        badgeColor="#16a34a"
      />
    </ThreeCanvasContainer>
  );
};
