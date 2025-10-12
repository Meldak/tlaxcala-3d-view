import React from 'react'

function C9({ nodes, materials, ...props }) {
    return (
    <group {...props} dispose={null}>
      <group position={[0, 0, -7.376]} rotation={[Math.PI / 2, 0, 0]} scale={0.442}>
        <mesh geometry={nodes.Mesh011.geometry} material={materials['Canter_a___13.002']} />
        <mesh geometry={nodes.Mesh011_1.geometry} material={materials['Vidrio___Claro_R_pido.004']} />
        <mesh geometry={nodes.Mesh011_2.geometry} material={materials.Madera___Nogal_Horizontal} />
        <mesh geometry={nodes.Mesh011_3.geometry} material={materials.Canter_a___02} />
        <mesh geometry={nodes.Mesh011_4.geometry} material={materials.Canter_a___12_19300658__desde_objeto_convertido_} />
        <mesh geometry={nodes.Mesh011_5.geometry} material={materials['Pintura__Gris_Claro.004']} />
        <mesh geometry={nodes.Mesh011_6.geometry} material={materials['Madera___Pino_Granulado_Horizontal.004']} />
        <mesh geometry={nodes.Mesh011_7.geometry} material={materials['Metal___Acero_Inoxidable.004']} />
        <mesh geometry={nodes.Mesh011_8.geometry} material={materials.Metal___Zinc} />
        <mesh geometry={nodes.Mesh011_9.geometry} material={materials.Canter_a___02_1} />
        <mesh geometry={nodes.Mesh011_10.geometry} material={materials.Estuco___Rojo_Rugoso} />
        <mesh geometry={nodes.Mesh011_11.geometry} material={materials['Color_D05.001']} />
        <mesh geometry={nodes.Mesh011_12.geometry} material={materials['Hormig_n___02.004']} />
        <mesh geometry={nodes.Mesh011_13.geometry} material={materials.Hormig_n___02_1} />
        <mesh geometry={nodes.Mesh011_14.geometry} material={materials.Cubierta___Tejas_Cedro_Claro} />
        <mesh geometry={nodes.Mesh011_15.geometry} material={materials['Pintura__Titanio_Blanco.001']} />
      </group>
      <mesh geometry={nodes.logos_F1.geometry} material={materials['M_cintillaVF.002']} position={[-0.193, 0.295, 0.916]} rotation={[Math.PI / 2, 0, 0]} scale={1.771} />
    </group>
  )
}


export default C9
