
const experience = [
  {
    id: 0,
    company: "SOAINT S.A. – Portal Soainters",
    jobTitle: "Consultor Técnico",
    fromDate: "08/2020",
    toDate: "09/2023",
    project: false,
    references: false,
    description:
      "De manera paralela a los proyectos en los que he participado en la empresa Soaint S.A., hemos desarrollado en conjunto a un equipo de trabajo, una aplicacion de gestión. Esta app inicio con el fin de controlar los ingresos a la oficina en pandemia. Con el pasar del tiempo la aplicación tomo un giro otorgandole mas facultades, donde se pueden agregar módulos nuevos, roles, control de usuarios, agenda, solicitudes, credenciales digitales, asignación debeneficios, contempla configuración personalizada de parámetros para la aplicación, uno de estos parámetrosera, ese especificamente identificar si el estado se encontraba en pandemia, este se activaba y los controles habilitaban campos de temperaturas. Al tener roles, los perfiles que eran de los colaboradores podían ver sus beneficios tanto asignados por contratos, como beneficios negociables por gestiónHumana al momento de ser contratado. Aplicacion desarrollada con React js y Node js.",
  },
  {
    id: 1,
    company: "SOAINT S.A. – Principal Financial Group",
    jobTitle: "Consultor Técnico",
    fromDate: "05/2023",
    toDate: "08/2023",
    project: true,
    references: false,
    description:
      "En principal participe en el backend, especificamente para migraciones y despliegue de arquitecturas basadas en AWS. Se utilizaba AWS-CDK, que permite crear arquitecturas de servicios AWS basadas en codigo, en este caso se utilizo node ts. Fui parte de un immersion day aws, dando inicio a la capacitacion con los cursos de AWS Partner.",
  },
  {
    id: 2,
    company: "SOAINT S.A. – Coopeuch",
    jobTitle: "Consultor Técnico",
    fromDate: "11/2021",
    toDate: "04/2023",
    project: false,
    references: false,
    description:
      "En Coopeuch, inicie labores como frontend, desarrollando la aplicación mobile, con metodología scrum. Utilizamos React Native, junto a InVision nos apoyamos para conseguir los flujos solicitados por el cliente, trabajábamos en equipo para definir cada requerimiento y asignación de tickets junto al producto owner y scrum master. Cada cierto tiempo nos cambiaban de células para asumir nuevos retos, dentro de esos estuvo el cambio al backend, donde trabaje con java y un nuevo modelo de negocio, que contemplaba servicios en la nube de amazon, control tower y plantillas de correos, las cuales también cree a partir de InVisions que entregaba el diseñador.",
  },
  {
    id: 3,
    company: "SOAINT S.A. – Oracle Brasil",
    jobTitle: "Consultor Técnico",
    fromDate: "09/2021",
    toDate: "11/2021",
    project: true,
    references: false,
    description:
      "Las labores se desempeñaron en modalidad remota con el cliente Oracle de Brasil en la celula OCC, con una metodología ágil interna, propia de Oracle. Participe en el proyecto de Travel FAN Banco Chile, asumiendo distintos retos como frontend, desarrollando con React js.",
  },
  {
    id: 4,
    company: "SOAINT S.A. – ESIGN S.A.",
    jobTitle: "Consultor Técnico",
    fromDate: "08/2020",
    toDate: "09/2021",
    project: true,
    references: false,
    description:
      "SOAINT S.A. es una consultora, subcontratada por Esign S.A., en donde realice distintas actividades como fullstack, apesar de que mi foco de especialidad es el desarrollo frontend de cada sistema. Se integraron servicios APIs en el sistema Cloudsigneren PHP Symfony. Además de implementaciones lógicas de asignación de roles y regulación de permisos para usuarios, a uno de lossistemas nuevos de Esign para autentificación (RA - JavaScript - JavaEE). Cree el front para la compra de firma y certificados (FEA -FES) para Canje Colombia (HTML - CSS). Cada uno de los sistemas se trabajó con Git versionando cada avance. Estuve presente endistintas células internas con variados sistemas, con metodologíascrum y modalidadremotafijo.",
  },
  {
    id: 5,
    company: "Fabrimetal S.A.",
    jobTitle: "Ingeniero en Desarrollo (Remoto En Pandemia)",
    fromDate: "10/2019",
    toDate: "08/2020",
    project: false,
    references: false,
    description:
      "Soaint S.A. es una empresa de desarrollo de software, subcontratada por Esign S.A., en donde realizo distintas actividades como fullstack, apesar de que mi foco de especialidad es el desarrollo frontend de cada sistema, se integraron servicios APIs en el sistema Cloudsigneren PHP Symfony. Además de implementaciones lógicas de asignación de roles y regulación de permisos para usuarios, a uno de lossistemas nuevos de Esign para autentificación (RA - JavaScript - JavaEE). Cree el front para la compra de firma y certificados (FEA -FES) para Canje Colombia (HTML - CSS). Cada uno de los sistemas se trabajó con Git versionando cada avance. Estuve presente endistintas células internas con variados sistemas, con metodologíascrum y modalidad remota.",
  },
  {
    id: 6,
    company: "Automovil Club Chile",
    jobTitle: "Analista de sistemas Fullstack",
    fromDate: "05/2019",
    toDate: "09/2019",
    project: true,
    references: false,
    description:
      "Participe en un proyecto, como fullstack, en el desarrollo de distintos sistemas híbridos, sistemas escuela internos y desarrollando módulos, entre los sistemas que desarrolle, se encuentra la credencial virtual de socios de Automóvil Club Chile y un gestor de convenios con empresas externas, el que apoya en la gestion a los participantes de distintos cursos de conducción, capacitaciones y entre otras actividades que incluya la promocion ofrecida por el sponsor descrito en la siguiente lista. Además de formar parte de la toma de decisiones del holding de Automóvil club y sus distintas empresas. Al comienzo trabajé fuertemente con el área de marketing utilizando el gestor de contenidos de Modyo junto a las jefaturas del área, dando apoyo al nuevo proyecto para la corredora de seguros que forma parte de automóvil club (MACC corredora de seguros), utilizamos CRM para administrar y guardar la información ingresada por todos los formularios mantenidos en la página de automovilclub.cl. Realice una instalación de Moodle, para utilizarlo un tipo classroom para los alumnos que participaban de las clases de conducción online.",
  },
  {
    id: 7,
    company: "Confites Cookieman",
    jobTitle: "Analista de sistemas (Fullstack)",
    fromDate: "06/2017",
    toDate: "05/2019",
    project: false,
    references: [
      {
        name: "Michael Martinez",
        phone: "+56942594251",
        active: true,
      },
    ],
    description:
      "Me desempeñe en el área de sistemas, desarrollando sobre el ERP FrountAccounting creando y modificando módulos de compra y venta, contabilidad, bodega e inventario, despacho y configuraciones de este.Conocimientos del prototipo de facturación que imparte  SII a empresas. Se generaron procedimientos de almacenado en PL/SQL que trabajaría junto a las órdenes de compra, agrupando todas las solicitudes de esta, aparte de generar funcionesque optimizaran el ERP. Todo esto desarrollado en un ambiente prueba, con el fin de mejorar el ambiente de producción ya implementado para la migración de su antiguo sistema basado COBOL, preparándolo para los distintos locales de la empresa (TIP-TOP / GELATO´S). Por cada módulo, realicé capacitaciones presenciales al personal de la  empresa demostrando funcionalidad y aplicando la práctica, además de asistencias a los usuarios en puestos de trabajo, así poder analizar posibles mejoras de rendimientos por módulos.",
  },
];

export default experience;
