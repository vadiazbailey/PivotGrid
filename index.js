$(function() {
    //Creo un pivot
    $("#pivotGrid").dxPivotGrid({
        // Configuration goes here
        dataSource: { 
            //Origen de los datos
            store: {
                type: "xmla",
                url: "https://demos.devexpress.com/Services/OLAP/msmdpump.dll",
                catalog: "Adventure Works DW Standard Edition",
                cube: "Adventure Works"
            },
            //Que datos voy a mostrar
            fields: [{
                dataField: "[Product].[Category]",
                area: "row",
                },
                {
                    dataField:"[Product].[Subcategory]",
                    area:"row",
                },
                {
                    dataField:"[Ship Date].[Calendar Year]",
                    area: "column"
                },
                {
                    dataField:"[Ship Date].[Month of Year]",
                    area: "column",
                },
                {
                    dataField: "[Measures].[Sales Amount]",
                    area: "data",
                    format: "currency",
                },
                {
                    dataField: "[Measures].[Tax Amount]",
                    area: "data",
                    format: "currency",
                }],
                fieldPanel: {
                    visible: true,
                    showFilterValues:false, //Oculto el area de filtros
                }
        },
    });
});


/**Enlazar la cuadrícula dinámica a los datos
 * 
 * Independientemente del tipo de origen de datos, use la propiedad dataSource para enlazar PivotGrid a 
 * los datos. Esta propiedad acepta una instancia o un objeto de configuración de PivotGridDataSource.
 * PivotGridDataSource le permite procesar datos antes de que PivotGrid los muestre. PivotGridDataSource 
 * contiene un almacén que encapsula la lógica de acceso a los datos. Se deben usar diferentes tipos de 
 * almacén con diferentes tipos de orígenes de datos. */

/**Configurar campos y áreas
 * 
 * Para mostrar datos en PivotGrid, especifique la matriz fields[].
 * Puede distribuir campos entre cuatro áreas diferentes: fila, columna, filtro y datos. Los campos de fila
 *  y columna contienen valores que se muestran en los encabezados de fila y columna. Los campos de filtro 
 * son invisibles, pero los usuarios pueden filtrar los datos contra ellos. Los campos de datos contienen 
 * valores para el cálculo de resumen. Para especificar el área, establezca la propiedad area
 */

/**Mostrar el panel de campo 
 * Un panel de campo es un elemento que muestra los campos de cuadrícula dinámica involucrados en el cálculo
 *  de resumen. Este panel consta de las mismas cuatro áreas de campo: columna, fila, datos y filtro. Los 
 * usuarios pueden arrastrar y soltar campos entre estas áreas.
 * Para mostrar el panel de campo, habilite el fieldPanel. propiedad visible. Utilice otras propiedades de 
 * fieldPanel para configurar características opcionales. Por ejemplo, puede ocultar el área del campo de 
 * filtro:*/

/**Para configurar el selector de campos, declare el objeto fieldChooser. Utilice la propiedad enabled para especificar si el icono selector de campos y el comando de menú contextual correspondiente están disponibles. El valor predeterminado de esta propiedad es true.

La sección Todos los campos incluye los campos declarados en la matriz fields[] y los campos generados 
automáticamente a partir del modelo de origen de datos. Si la sección Todos los campos contiene un gran 
número de campos por los que los usuarios tienen dificultades para navegar, puede deshabilitar dataSource. 
propiedad retrieveFields para ocultar los campos generados automáticamente. Como alternativa, puede habilitar 
la propiedad allowSearch para permitir a los usuarios buscar en la sección Todos los campos. */