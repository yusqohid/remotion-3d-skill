import React from 'react';
import { Composition } from 'remotion';
import { DioramaExplainerScene } from './scenes/DioramaExplainerScene';
import { TechShowcaseScene } from './scenes/TechShowcaseScene';
import { UrbanCityScene } from './scenes/UrbanCityScene';

export const Root: React.FC = () => {
  return (
    <>
      {/* 9:16 Vertical Video (Urban Cityscape Diorama, 5s @ 30fps) */}
      <Composition
        id="UrbanCity"
        component={UrbanCityScene}
        durationInFrames={150}
        fps={30}
        width={720}
        height={1280}
        defaultProps={{}}
      />

      {/* 9:16 Vertical Video (Structural Explainer Diorama) */}
      <Composition
        id="DioramaExplainer"
        component={DioramaExplainerScene}
        durationInFrames={150}
        fps={30}
        width={720}
        height={1280}
        defaultProps={{}}
      />

      {/* 16:9 Landscape Video (Tech & Mograph Showcase) */}
      <Composition
        id="TechShowcase"
        component={TechShowcaseScene}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
    </>
  );
};
