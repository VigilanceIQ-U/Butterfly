/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: heddathunell (https://sketchfab.com/heddathunell)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/butterfly-bb7a9781c2674e59a0f335fb8efb77d3
Title: Butterfly
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Butterfly(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/butterfly/scene-transformed.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions.Object_0.timeScale = 0.15
    actions.Object_0.play()
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="913812325ebb4106b80eca412a29f029abccleanermaterialmergergles">
            <group name="Object_2" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_3">
                <group name="Object_4" position={[2.47, -1.19, 1.22]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_8" position={[0.14, -1.17, 1.19]}>
                    <group name="Object_9" position={[29.77, 0.87, 0]}>
                      <group name="MorphMainGroup">
                        <mesh name="Line001" geometry={nodes.Line001.geometry} material={materials.Line001} morphTargetDictionary={nodes.Line001.morphTargetDictionary} morphTargetInfluences={nodes.Line001.morphTargetInfluences} />
                      </group>
                      <group name="MorphMainGroup_1">
                        <mesh name="Line001_1" geometry={nodes.Line001_1.geometry} material={materials.Line001} morphTargetDictionary={nodes.Line001_1.morphTargetDictionary} morphTargetInfluences={nodes.Line001_1.morphTargetInfluences} />
                      </group>
                    </group>
                    <group name="Object_14" position={[29.77, 0.87, 0]}>
                      <group name="MorphMainGroup_2">
                        <mesh name="Line001_2" geometry={nodes.Line001_2.geometry} material={materials.Line001} morphTargetDictionary={nodes.Line001_2.morphTargetDictionary} morphTargetInfluences={nodes.Line001_2.morphTargetInfluences} />
                      </group>
                      <group name="MorphMainGroup_3">
                        <mesh name="Line001_3" geometry={nodes.Line001_3.geometry} material={materials.Line001} morphTargetDictionary={nodes.Line001_3.morphTargetDictionary} morphTargetInfluences={nodes.Line001_3.morphTargetInfluences} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_19" position={[0.13, -1.89, 1.19]}>
                    <group name="Object_20" position={[-31.62, -4.18, 0]}>
                      <group name="MorphMainGroup_4">
                        <mesh name="Line004" geometry={nodes.Line004.geometry} material={materials.Line004} morphTargetDictionary={nodes.Line004.morphTargetDictionary} morphTargetInfluences={nodes.Line004.morphTargetInfluences} />
                      </group>
                      <group name="MorphMainGroup_5">
                        <mesh name="Line004_1" geometry={nodes.Line004_1.geometry} material={materials.Line004} morphTargetDictionary={nodes.Line004_1.morphTargetDictionary} morphTargetInfluences={nodes.Line004_1.morphTargetInfluences} />
                      </group>
                    </group>
                    <group name="Object_25" position={[-31.62, -4.18, 0]}>
                      <group name="MorphMainGroup_6">
                        <mesh name="Line004_2" geometry={nodes.Line004_2.geometry} material={materials.Line004} morphTargetDictionary={nodes.Line004_2.morphTargetDictionary} morphTargetInfluences={nodes.Line004_2.morphTargetInfluences} />
                      </group>
                      <group name="MorphMainGroup_7">
                        <mesh name="Line004_3" geometry={nodes.Line004_3.geometry} material={materials.Line004} morphTargetDictionary={nodes.Line004_3.morphTargetDictionary} morphTargetInfluences={nodes.Line004_3.morphTargetInfluences} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_30" position={[0.77, 11.67, 1.19]} rotation={[-1.31, 0, 0]}>
                    <group name="TimeframeMainGroup_4">
                      <group name="Object_32">
                        <mesh name="Cylinder001_16_0" geometry={nodes.Cylinder001_16_0.geometry} material={materials.Cylinder001} />
                      </group>
                    </group>
                    <group name="TimeframeMainGroup_5">
                      <group name="Object_35">
                        <mesh name="Cylinder001_16_0_1" geometry={nodes.Cylinder001_16_0_1.geometry} material={materials.Cylinder001} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_37" position={[4.48, 24.83, 4.71]} rotation={[-1.31, 0.53, 3.01]}>
                    <group name="TimeframeMainGroup_6">
                      <group name="Object_39">
                        <mesh name="Sphere002_21_0" geometry={nodes.Sphere002_21_0.geometry} material={materials.Sphere002} />
                      </group>
                    </group>
                    <group name="TimeframeMainGroup_7">
                      <group name="Object_42">
                        <mesh name="Sphere002_21_0_1" geometry={nodes.Sphere002_21_0_1.geometry} material={materials.Sphere002} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_44" position={[-1.04, 11.67, 1.19]} rotation={[-1.31, 0, Math.PI]}>
                    <group name="TimeframeMainGroup_8">
                      <group name="Object_46">
                        <mesh name="Cylinder002_23_0" geometry={nodes.Cylinder002_23_0.geometry} material={materials.Cylinder002} />
                      </group>
                    </group>
                    <group name="TimeframeMainGroup_9">
                      <group name="Object_49">
                        <mesh name="Cylinder002_23_0_1" geometry={nodes.Cylinder002_23_0_1.geometry} material={materials.Cylinder002} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_51" position={[-4.75, 24.83, 4.73]} rotation={[-1.31, -0.53, -3.01]}>
                    <group name="TimeframeMainGroup_10">
                      <group name="Object_53">
                        <mesh name="Sphere001_28_0" geometry={nodes.Sphere001_28_0.geometry} material={materials.Sphere001} />
                      </group>
                    </group>
                    <group name="TimeframeMainGroup_11">
                      <group name="Object_56">
                        <mesh name="Sphere001_28_0_1" geometry={nodes.Sphere001_28_0_1.geometry} material={materials.Sphere001} />
                      </group>
                    </group>
                  </group>
                  <group name="TimeframeMainGroup">
                    <group name="Object_6">
                      <mesh name="Box001_2_0" geometry={nodes.Box001_2_0.geometry} material={materials.Box001} />
                    </group>
                  </group>
                  <group name="Object_58" position={[-4.75, 24.83, 4.73]} rotation={[-1.31, -0.53, -3.01]}>
                    <group name="TimeframeMainGroup_12">
                      <group name="Object_60">
                        <mesh name="Sphere001_28_0_2" geometry={nodes.Sphere001_28_0_2.geometry} material={materials.Sphere001} />
                      </group>
                    </group>
                    <group name="TimeframeMainGroup_13">
                      <group name="Object_63">
                        <mesh name="Sphere001_28_0_3" geometry={nodes.Sphere001_28_0_3.geometry} material={materials.Sphere001} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_65" position={[-1.04, 11.67, 1.19]} rotation={[-1.31, 0, Math.PI]}>
                    <group name="TimeframeMainGroup_14">
                      <group name="Object_67">
                        <mesh name="Cylinder002_23_0_2" geometry={nodes.Cylinder002_23_0_2.geometry} material={materials.Cylinder002} />
                      </group>
                    </group>
                    <group name="TimeframeMainGroup_15">
                      <group name="Object_70">
                        <mesh name="Cylinder002_23_0_3" geometry={nodes.Cylinder002_23_0_3.geometry} material={materials.Cylinder002} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_72" position={[4.48, 24.83, 4.71]} rotation={[-1.31, 0.53, 3.01]}>
                    <group name="TimeframeMainGroup_16">
                      <group name="Object_74">
                        <mesh name="Sphere002_21_0_2" geometry={nodes.Sphere002_21_0_2.geometry} material={materials.Sphere002} />
                      </group>
                    </group>
                    <group name="TimeframeMainGroup_17">
                      <group name="Object_77">
                        <mesh name="Sphere002_21_0_3" geometry={nodes.Sphere002_21_0_3.geometry} material={materials.Sphere002} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_79" position={[0.77, 11.67, 1.19]} rotation={[-1.31, 0, 0]}>
                    <group name="TimeframeMainGroup_18">
                      <group name="Object_81">
                        <mesh name="Cylinder001_16_0_2" geometry={nodes.Cylinder001_16_0_2.geometry} material={materials.Cylinder001} />
                      </group>
                    </group>
                    <group name="TimeframeMainGroup_19">
                      <group name="Object_84">
                        <mesh name="Cylinder001_16_0_3" geometry={nodes.Cylinder001_16_0_3.geometry} material={materials.Cylinder001} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_86" position={[0.13, -1.89, 1.19]}>
                    <group name="Object_87" position={[-31.62, -4.18, 0]}>
                      <group name="MorphMainGroup_8">
                        <mesh name="Line004_4" geometry={nodes.Line004_4.geometry} material={materials.Line004} morphTargetDictionary={nodes.Line004_4.morphTargetDictionary} morphTargetInfluences={nodes.Line004_4.morphTargetInfluences} />
                      </group>
                      <group name="MorphMainGroup_9">
                        <mesh name="Line004_5" geometry={nodes.Line004_5.geometry} material={materials.Line004} morphTargetDictionary={nodes.Line004_5.morphTargetDictionary} morphTargetInfluences={nodes.Line004_5.morphTargetInfluences} />
                      </group>
                    </group>
                    <group name="Object_92" position={[-31.62, -4.18, 0]}>
                      <group name="MorphMainGroup_10">
                        <mesh name="Line004_6" geometry={nodes.Line004_6.geometry} material={materials.Line004} morphTargetDictionary={nodes.Line004_6.morphTargetDictionary} morphTargetInfluences={nodes.Line004_6.morphTargetInfluences} />
                      </group>
                      <group name="MorphMainGroup_11">
                        <mesh name="Line004_7" geometry={nodes.Line004_7.geometry} material={materials.Line004} morphTargetDictionary={nodes.Line004_7.morphTargetDictionary} morphTargetInfluences={nodes.Line004_7.morphTargetInfluences} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_97" position={[0.14, -1.17, 1.19]}>
                    <group name="Object_98" position={[29.77, 0.87, 0]}>
                      <group name="MorphMainGroup_12">
                        <mesh name="Line001_4" geometry={nodes.Line001_4.geometry} material={materials.Line001} morphTargetDictionary={nodes.Line001_4.morphTargetDictionary} morphTargetInfluences={nodes.Line001_4.morphTargetInfluences} />
                      </group>
                      <group name="MorphMainGroup_13">
                        <mesh name="Line001_5" geometry={nodes.Line001_5.geometry} material={materials.Line001} morphTargetDictionary={nodes.Line001_5.morphTargetDictionary} morphTargetInfluences={nodes.Line001_5.morphTargetInfluences} />
                      </group>
                    </group>
                    <group name="Object_103" position={[29.77, 0.87, 0]}>
                      <group name="MorphMainGroup_14">
                        <mesh name="Line001_6" geometry={nodes.Line001_6.geometry} material={materials.Line001} morphTargetDictionary={nodes.Line001_6.morphTargetDictionary} morphTargetInfluences={nodes.Line001_6.morphTargetInfluences} />
                      </group>
                      <group name="MorphMainGroup_15">
                        <mesh name="Line001_7" geometry={nodes.Line001_7.geometry} material={materials.Line001} morphTargetDictionary={nodes.Line001_7.morphTargetDictionary} morphTargetInfluences={nodes.Line001_7.morphTargetInfluences} />
                      </group>
                    </group>
                  </group>
                  <group name="TimeframeMainGroup_1">
                    <group name="Object_109">
                      <mesh name="Box001_2_0_1" geometry={nodes.Box001_2_0_1.geometry} material={materials.Box001} />
                    </group>
                  </group>
                </group>
                <group visible={false} name="Object_111" position={[2.47, -1.19, 1.22]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="TimeframeMainGroup_2">
                    <group name="Object_113">
                      <mesh name="Box001_2_0_2" geometry={nodes.Box001_2_0_2.geometry} material={materials.Box001} />
                    </group>
                  </group>
                  <group name="Object_115" position={[0.14, -1.17, 1.19]}>
                    <group name="Object_116" position={[29.77, 0.87, 0]}>
                      <group name="MorphMainGroup_16">
                        <mesh name="Line001_8" geometry={nodes.Line001_8.geometry} material={materials.Line001} morphTargetDictionary={nodes.Line001_8.morphTargetDictionary} morphTargetInfluences={nodes.Line001_8.morphTargetInfluences} />
                      </group>
                      <group name="MorphMainGroup_17">
                        <mesh name="Line001_9" geometry={nodes.Line001_9.geometry} material={materials.Line001} morphTargetDictionary={nodes.Line001_9.morphTargetDictionary} morphTargetInfluences={nodes.Line001_9.morphTargetInfluences} />
                      </group>
                    </group>
                    <group name="Object_121" position={[29.77, 0.87, 0]}>
                      <group name="MorphMainGroup_18">
                        <mesh name="Line001_10" geometry={nodes.Line001_10.geometry} material={materials.Line001} morphTargetDictionary={nodes.Line001_10.morphTargetDictionary} morphTargetInfluences={nodes.Line001_10.morphTargetInfluences} />
                      </group>
                      <group name="MorphMainGroup_19">
                        <mesh name="Line001_11" geometry={nodes.Line001_11.geometry} material={materials.Line001} morphTargetDictionary={nodes.Line001_11.morphTargetDictionary} morphTargetInfluences={nodes.Line001_11.morphTargetInfluences} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_126" position={[0.13, -1.89, 1.19]}>
                    <group name="Object_127" position={[-31.62, -4.18, 0]}>
                      <group name="MorphMainGroup_20">
                        <mesh name="Line004_8" geometry={nodes.Line004_8.geometry} material={materials.Line004} morphTargetDictionary={nodes.Line004_8.morphTargetDictionary} morphTargetInfluences={nodes.Line004_8.morphTargetInfluences} />
                      </group>
                      <group name="MorphMainGroup_21">
                        <mesh name="Line004_9" geometry={nodes.Line004_9.geometry} material={materials.Line004} morphTargetDictionary={nodes.Line004_9.morphTargetDictionary} morphTargetInfluences={nodes.Line004_9.morphTargetInfluences} />
                      </group>
                    </group>
                    <group name="Object_132" position={[-31.62, -4.18, 0]}>
                      <group name="MorphMainGroup_22">
                        <mesh name="Line004_10" geometry={nodes.Line004_10.geometry} material={materials.Line004} morphTargetDictionary={nodes.Line004_10.morphTargetDictionary} morphTargetInfluences={nodes.Line004_10.morphTargetInfluences} />
                      </group>
                      <group name="MorphMainGroup_23">
                        <mesh name="Line004_11" geometry={nodes.Line004_11.geometry} material={materials.Line004} morphTargetDictionary={nodes.Line004_11.morphTargetDictionary} morphTargetInfluences={nodes.Line004_11.morphTargetInfluences} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_137" position={[0.77, 11.67, 1.19]} rotation={[-1.31, 0, 0]}>
                    <group name="TimeframeMainGroup_20">
                      <group name="Object_139">
                        <mesh name="Cylinder001_16_0_4" geometry={nodes.Cylinder001_16_0_4.geometry} material={materials.Cylinder001} />
                      </group>
                    </group>
                    <group name="TimeframeMainGroup_21">
                      <group name="Object_142">
                        <mesh name="Cylinder001_16_0_5" geometry={nodes.Cylinder001_16_0_5.geometry} material={materials.Cylinder001} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_144" position={[4.48, 24.83, 4.71]} rotation={[-1.31, 0.53, 3.01]}>
                    <group name="TimeframeMainGroup_22">
                      <group name="Object_146">
                        <mesh name="Sphere002_21_0_4" geometry={nodes.Sphere002_21_0_4.geometry} material={materials.Sphere002} />
                      </group>
                    </group>
                    <group name="TimeframeMainGroup_23">
                      <group name="Object_149">
                        <mesh name="Sphere002_21_0_5" geometry={nodes.Sphere002_21_0_5.geometry} material={materials.Sphere002} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_151" position={[-1.04, 11.67, 1.19]} rotation={[-1.31, 0, Math.PI]}>
                    <group name="TimeframeMainGroup_24">
                      <group name="Object_153">
                        <mesh name="Cylinder002_23_0_4" geometry={nodes.Cylinder002_23_0_4.geometry} material={materials.Cylinder002} />
                      </group>
                    </group>
                    <group name="TimeframeMainGroup_25">
                      <group name="Object_156">
                        <mesh name="Cylinder002_23_0_5" geometry={nodes.Cylinder002_23_0_5.geometry} material={materials.Cylinder002} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_158" position={[-4.75, 24.83, 4.73]} rotation={[-1.31, -0.53, -3.01]}>
                    <group name="TimeframeMainGroup_26">
                      <group name="Object_160">
                        <mesh name="Sphere001_28_0_4" geometry={nodes.Sphere001_28_0_4.geometry} material={materials.Sphere001} />
                      </group>
                    </group>
                    <group name="TimeframeMainGroup_27">
                      <group name="Object_163">
                        <mesh name="Sphere001_28_0_5" geometry={nodes.Sphere001_28_0_5.geometry} material={materials.Sphere001} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_165" position={[-4.75, 24.83, 4.73]} rotation={[-1.31, -0.53, -3.01]}>
                    <group name="TimeframeMainGroup_28">
                      <group name="Object_167">
                        <mesh name="Sphere001_28_0_6" geometry={nodes.Sphere001_28_0_6.geometry} material={materials.Sphere001} />
                      </group>
                    </group>
                    <group name="TimeframeMainGroup_29">
                      <group name="Object_170">
                        <mesh name="Sphere001_28_0_7" geometry={nodes.Sphere001_28_0_7.geometry} material={materials.Sphere001} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_172" position={[-1.04, 11.67, 1.19]} rotation={[-1.31, 0, Math.PI]}>
                    <group name="TimeframeMainGroup_30">
                      <group name="Object_174">
                        <mesh name="Cylinder002_23_0_6" geometry={nodes.Cylinder002_23_0_6.geometry} material={materials.Cylinder002} />
                      </group>
                    </group>
                    <group name="TimeframeMainGroup_31">
                      <group name="Object_177">
                        <mesh name="Cylinder002_23_0_7" geometry={nodes.Cylinder002_23_0_7.geometry} material={materials.Cylinder002} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_179" position={[4.48, 24.83, 4.71]} rotation={[-1.31, 0.53, 3.01]}>
                    <group name="TimeframeMainGroup_32">
                      <group name="Object_181">
                        <mesh name="Sphere002_21_0_6" geometry={nodes.Sphere002_21_0_6.geometry} material={materials.Sphere002} />
                      </group>
                    </group>
                    <group name="TimeframeMainGroup_33">
                      <group name="Object_184">
                        <mesh name="Sphere002_21_0_7" geometry={nodes.Sphere002_21_0_7.geometry} material={materials.Sphere002} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_186" position={[0.77, 11.67, 1.19]} rotation={[-1.31, 0, 0]}>
                    <group name="TimeframeMainGroup_34">
                      <group name="Object_188">
                        <mesh name="Cylinder001_16_0_6" geometry={nodes.Cylinder001_16_0_6.geometry} material={materials.Cylinder001} />
                      </group>
                    </group>
                    <group name="TimeframeMainGroup_35">
                      <group name="Object_191">
                        <mesh name="Cylinder001_16_0_7" geometry={nodes.Cylinder001_16_0_7.geometry} material={materials.Cylinder001} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_193" position={[0.13, -1.89, 1.19]}>
                    <group name="Object_194" position={[-31.62, -4.18, 0]}>
                      <group name="MorphMainGroup_24">
                        <mesh name="Line004_12" geometry={nodes.Line004_12.geometry} material={materials.Line004} morphTargetDictionary={nodes.Line004_12.morphTargetDictionary} morphTargetInfluences={nodes.Line004_12.morphTargetInfluences} />
                      </group>
                      <group name="MorphMainGroup_25">
                        <mesh name="Line004_13" geometry={nodes.Line004_13.geometry} material={materials.Line004} morphTargetDictionary={nodes.Line004_13.morphTargetDictionary} morphTargetInfluences={nodes.Line004_13.morphTargetInfluences} />
                      </group>
                    </group>
                    <group name="Object_199" position={[-31.62, -4.18, 0]}>
                      <group name="MorphMainGroup_26">
                        <mesh name="Line004_14" geometry={nodes.Line004_14.geometry} material={materials.Line004} morphTargetDictionary={nodes.Line004_14.morphTargetDictionary} morphTargetInfluences={nodes.Line004_14.morphTargetInfluences} />
                      </group>
                      <group name="MorphMainGroup_27">
                        <mesh name="Line004_15" geometry={nodes.Line004_15.geometry} material={materials.Line004} morphTargetDictionary={nodes.Line004_15.morphTargetDictionary} morphTargetInfluences={nodes.Line004_15.morphTargetInfluences} />
                      </group>
                    </group>
                  </group>
                  <group name="Object_204" position={[0.14, -1.17, 1.19]}>
                    <group name="Object_205" position={[29.77, 0.87, 0]}>
                      <group name="MorphMainGroup_28">
                        <mesh name="Line001_12" geometry={nodes.Line001_12.geometry} material={materials.Line001} morphTargetDictionary={nodes.Line001_12.morphTargetDictionary} morphTargetInfluences={nodes.Line001_12.morphTargetInfluences} />
                      </group>
                      <group name="MorphMainGroup_29">
                        <mesh name="Line001_13" geometry={nodes.Line001_13.geometry} material={materials.Line001} morphTargetDictionary={nodes.Line001_13.morphTargetDictionary} morphTargetInfluences={nodes.Line001_13.morphTargetInfluences} />
                      </group>
                    </group>
                    <group name="Object_210" position={[29.77, 0.87, 0]}>
                      <group name="MorphMainGroup_30">
                        <mesh name="Line001_14" geometry={nodes.Line001_14.geometry} material={materials.Line001} morphTargetDictionary={nodes.Line001_14.morphTargetDictionary} morphTargetInfluences={nodes.Line001_14.morphTargetInfluences} />
                      </group>
                      <group name="MorphMainGroup_31">
                        <mesh name="Line001_15" geometry={nodes.Line001_15.geometry} material={materials.Line001} morphTargetDictionary={nodes.Line001_15.morphTargetDictionary} morphTargetInfluences={nodes.Line001_15.morphTargetInfluences} />
                      </group>
                    </group>
                  </group>
                  <group name="TimeframeMainGroup_3">
                    <group name="Object_216">
                      <mesh name="Box001_2_0_3" geometry={nodes.Box001_2_0_3.geometry} material={materials.Box001} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/butterfly/scene-transformed.glb')
