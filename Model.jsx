import React from 'react'
import { useGLTF } from '@react-three/drei/native'

export default function Model(props) {
  const { nodes, materials } = useGLTF(require('../src/Model.glb'));
  return (
    <group {...props} dispose={null} scale={0.25}  >
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line001_17_-_Old_Copper_#1_0'].geometry}
          material={materials['17_-_Old_Copper_1']}
          position={[749.942, 189.597, -58.756]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Rectangle001_19_-_Glass_(Thin_wall)_0'].geometry}
          material={materials['19_-_Glass_Thin_wall']}
          position={[571.829, 0, 127.163]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line003_18_-_Rubber_0'].geometry}
          material={materials['18_-_Rubber']}
          position={[749.942, 63.025, -58.756]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Rectangle002_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[592.415, 122.68, -169.057]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line004_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[597.381, 125.984, -77.371]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line005_Solid_Glass_0.geometry}
          material={materials.Solid_Glass}
          position={[749.942, 260.463, -58.756]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line007__0.geometry}
          material={materials.Line007__0}
          position={[749.942, 125.973, -168.62]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line008_06_-_Default_0'].geometry}
          material={materials['06_-_Default']}
          position={[749.942, 252.694, -168.62]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line009_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[597.139, 151.726, 42.804]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line010_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[597.139, 166.331, 42.804]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line011_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[597.139, 137.066, 42.804]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line012_11_-_Default_0'].geometry}
          material={materials['11_-_Default']}
          position={[716.604, 165.703, 331.189]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line013_11_-_Default_0'].geometry}
          material={materials['11_-_Default']}
          position={[716.604, 165.703, 312.774]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line014_11_-_Default_0'].geometry}
          material={materials['11_-_Default']}
          position={[716.604, 165.703, 294.36]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line015_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[592.502, 22.503, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line016_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[592.502, 54.191, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line017_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[592.502, 85.88, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line018_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[592.502, 117.568, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line019_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[592.502, 149.257, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line020_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[592.502, 180.945, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line021_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[592.502, 212.634, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line022_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[592.502, 243.644, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line023_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[592.502, 265.354, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line024_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[593.245, 318.582, -169.241]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line025_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[593.245, 322.634, -169.241]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line026_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[593.245, 326.686, -169.241]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line027_16_-_Matte_Plastic_0'].geometry}
          material={materials['16_-_Matte_Plastic']}
          position={[709.221, -1.969, -15.932]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line028_15_-_Glossy_Plastic_0'].geometry}
          material={materials['15_-_Glossy_Plastic']}
          position={[487.397, -1.969, 278.837]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Object001_12_-_Car_Paint_0'].geometry}
          material={materials['12_-_Car_Paint']}
          position={[571.829, -3.261, 127.163]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line029_14_-_Polished_Aluminum_0'].geometry}
          material={materials['14_-_Polished_Aluminum']}
          position={[709.221, -60.611, -15.932]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line030_14_-_Polished_Aluminum_0'].geometry}
          material={materials['14_-_Polished_Aluminum']}
          position={[487.397, -60.611, 278.837]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Rectangle003_13_-_Brushed_Metal_#2_0'].geometry}
          material={materials['13_-_Brushed_Metal_2']}
          position={[571.829, -54.694, 127.163]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line031_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[749.942, 272.136, -58.756]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line032_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[749.942, 287.178, -58.756]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line033_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[749.942, 302.367, -58.756]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle004__0.geometry}
          material={materials.Line007__0}
          position={[874.54, 166.573, 381.16]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle005__0.geometry}
          material={materials.Line007__0}
          position={[874.54, 158.943, 247.879]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle006__0.geometry}
          material={materials.Line007__0}
          position={[874.54, 158.943, 114.598]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line034_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[744.404, 187.157, 309.857]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line035_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[744.404, 187.157, 157.071]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line036_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[744.404, 187.157, 2.305]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line037_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[679.422, 187.157, -166.444]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line038_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[179.773, 187.157, -166.444]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line039_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[162.364, 187.157, -229.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line040_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[162.364, 187.157, -328.295]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line041_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[744.404, 53.494, 2.305]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line042_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1006.969, 222.017, -8.069]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line043_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1006.969, 158.048, -8.069]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line044_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1006.969, 95.925, -8.069]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line045_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1006.969, 31.798, -8.069]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line046_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[679.422, 61.06, -166.444]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line047_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[517.036, 61.06, -166.444]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line048_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[914.87, 53.802, 69.683]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line049_Metal_0.geometry}
          material={materials.Metal}
          position={[751.917, 0, -166.651]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line050_Metal_0.geometry}
          material={materials.Metal}
          position={[749.942, 132.996, -168.62]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line051_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[496.124, 42.144, -199.392]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line052_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[496.124, 42.144, -234.904]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line053_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[496.124, 42.144, -270.415]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line054_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[496.124, 42.144, -305.927]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line055_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[496.124, 42.144, -341.439]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line056_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[528.592, 42.144, -392.274]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line057_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[589.221, 42.144, -392.274]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line058_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[652.828, 42.144, -392.274]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line059_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[714.585, 42.144, -392.274]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line060_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[778.192, 42.144, -392.274]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line061_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[843.651, 42.144, -392.274]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line062_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[912.557, 42.144, -392.274]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line063_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[977.959, 42.144, -392.274]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape001__0.geometry}
          material={materials.Line007__0}
          position={[749.942, 189.597, -58.756]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box001_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[750.508, 183.916, 310.158]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box002_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[750.508, 183.916, 158.146]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape002__0.geometry}
          material={materials.Line007__0}
          position={[749.942, 189.597, -210.768]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box003_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[750.508, 183.916, 11.34]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape003__0.geometry}
          material={materials.Line007__0}
          position={[749.942, 189.597, -357.573]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box004_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[750.508, 183.916, -76.413]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape004__0.geometry}
          material={materials.Line007__0}
          position={[749.942, 189.597, -445.327]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box005_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[168.062, 183.916, -212.781]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape005__0.geometry}
          material={materials.Line007__0}
          position={[166.349, 189.597, -581.694]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box006_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[168.062, 183.916, -311.279]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape006__0.geometry}
          material={materials.Line007__0}
          position={[166.349, 189.597, -680.192]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box007_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[750.508, 49.475, 12.118]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape007__0.geometry}
          material={materials.Line007__0}
          position={[749.942, 55.155, -356.796]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box008_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[780.791, 49.5, -173.191]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape008__0.geometry}
          material={materials.Line007__0}
          position={[411.877, 55.181, -172.625]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box009_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[652.938, 49.5, -173.191]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape009__0.geometry}
          material={materials.Line007__0}
          position={[284.025, 55.181, -172.625]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box010_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[315.675, 184.043, -173.191]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape010__0.geometry}
          material={materials.Line007__0}
          position={[284.025, 189.724, -172.625]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box011_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[779.96, 184.043, -173.191]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape011__0.geometry}
          material={materials.Line007__0}
          position={[411.046, 189.724, -172.625]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box012_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[1004.088, 169.477, -312.407]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape012__0.geometry}
          material={materials.Line007__0}
          position={[1003.522, 175.157, -681.321]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box013_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[1004.088, 169.477, -201.849]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape013__0.geometry}
          material={materials.Line007__0}
          position={[1003.522, 175.157, -570.762]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box014_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[1004.088, 169.477, -91.478]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape014__0.geometry}
          material={materials.Line007__0}
          position={[1003.522, 175.157, -460.391]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box015_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[1004.088, 169.477, 19.276]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape015__0.geometry}
          material={materials.Line007__0}
          position={[1003.522, 175.157, -349.638]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box016_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[1004.088, 169.477, 259.305]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape016__0.geometry}
          material={materials.Line007__0}
          position={[1003.522, 175.157, -109.608]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box017_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[1004.088, 169.477, 331.352]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape017__0.geometry}
          material={materials.Line007__0}
          position={[1003.522, 175.157, -37.561]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box018_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[1004.088, 43.445, 19.136]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape018__0.geometry}
          material={materials.Line007__0}
          position={[1003.522, 49.125, -349.777]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box019_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[1004.088, 43.445, -91.222]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape019__0.geometry}
          material={materials.Line007__0}
          position={[1003.522, 49.125, -460.135]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box020_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[1004.088, 43.445, -201.962]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape020__0.geometry}
          material={materials.Line007__0}
          position={[1003.522, 49.125, -570.876]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box021_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[1004.088, 43.445, -312.198]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape021__0.geometry}
          material={materials.Line007__0}
          position={[1003.522, 49.125, -681.112]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box022_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[925.563, 49.475, 72.266]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape022__0.geometry}
          material={materials.Line007__0}
          position={[556.65, 55.155, 72.832]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line064_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[597.381, 127.354, -77.371]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box023_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[456.122, 134.282, -387.811]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box024_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[490.347, 134.282, -387.811]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box025_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[118.904, 134.282, -318.595]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box026_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[118.904, 134.282, -249.379]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box027_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[118.904, 134.282, -180.163]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box028_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[118.904, 134.282, -81.346]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box029_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[559.396, 134.282, -81.346]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box030_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[673.8, 134.282, -81.346]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box031_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[673.8, 134.282, 63.97]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box032_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[673.8, 134.282, 209.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box033_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[673.8, 134.282, 375.693]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box036_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[729.522, 134.282, 375.693]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box037_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[748.245, 267.134, 457.658]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box038_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[748.245, 267.134, 307.349]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box039_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[748.245, 267.134, 157.039]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box040_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[748.245, 267.134, 6.73]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box041_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[748.245, 267.134, -170.608]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box042_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[646.672, 267.134, -170.608]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box043__0.geometry}
          material={materials.Line007__0}
          position={[557.769, 267.134, -170.608]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box044_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[151.682, 267.134, -171.329]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box045_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[151.682, 267.134, -274.288]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box046_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[151.682, 267.134, -380.289]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box047_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[689.876, 267.134, -380.289]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box048_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[876.742, 267.134, -380.289]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box049_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[999.33, 267.134, -380.289]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box050_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[999.33, 267.134, -195.955]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box051_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[999.33, 267.134, -11.621]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box052_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[999.33, 267.134, 172.713]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box053_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[999.33, 267.134, 357.046]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box054_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[999.33, 267.134, 457.412]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box055_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[919.121, 267.134, 457.412]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box056_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[821.214, 267.134, 457.412]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box057_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[501.745, 267.134, -380.289]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box058_20_-_Polished_Aluminum_0'].geometry}
          material={materials['20_-_Polished_Aluminum']}
          position={[313.613, 267.134, -380.289]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box059__0.geometry}
          material={materials.Line007__0}
          position={[301.702, 267.134, -170.608]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box060__0.geometry}
          material={materials.Line007__0}
          position={[443.819, 267.134, -170.608]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line065_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[592.502, 304.043, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line066_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[592.502, 284.962, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line067_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[396.041, 22.503, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line068_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[396.041, 54.191, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line069_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[396.041, 85.88, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line070_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[396.041, 180.945, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line071_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[396.041, 212.634, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line072_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[396.041, 243.644, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line073_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[396.041, 265.354, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line074_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[396.784, 318.582, -169.241]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line075_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[396.784, 322.634, -169.241]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line076_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[396.784, 326.686, -169.241]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line077_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[396.041, 304.043, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line078_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[396.041, 284.962, -141.447]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Rectangle007_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[395.954, 122.68, -169.057]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box061_24_-_Default_0'].geometry}
          material={materials['24_-_Default']}
          position={[302.16, 0, 155.8]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box062_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[400.336, 184.043, -173.191]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line079_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[299.798, 187.157, -166.444]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape023__0.geometry}
          material={materials.Line007__0}
          position={[31.423, 189.724, -172.625]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box063_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[598.113, 184.043, -173.191]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line080_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[497.575, 187.157, -166.444]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape024__0.geometry}
          material={materials.Line007__0}
          position={[229.2, 189.724, -172.625]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line081_11_-_Default_0'].geometry}
          material={materials['11_-_Default']}
          position={[237.629, 165.703, -124.814]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line082_11_-_Default_0'].geometry}
          material={materials['11_-_Default']}
          position={[219.214, 165.703, -124.814]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line083_11_-_Default_0'].geometry}
          material={materials['11_-_Default']}
          position={[200.8, 165.703, -124.814]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </group>
    </group>
  )
}
