ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([106.645464, -7.219317, 107.895751, -6.270006]);
var wms_layers = [];


        var lyr_CITRAGOOGLESATELITE_0 = new ol.layer.Tile({
            'title': 'CITRA GOOGLE SATELITE',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BUFFERHOTSPOT_1 = new ol.format.GeoJSON();
var features_BUFFERHOTSPOT_1 = format_BUFFERHOTSPOT_1.readFeatures(json_BUFFERHOTSPOT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BUFFERHOTSPOT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFERHOTSPOT_1.addFeatures(features_BUFFERHOTSPOT_1);
var lyr_BUFFERHOTSPOT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFERHOTSPOT_1, 
                style: style_BUFFERHOTSPOT_1,
                popuplayertitle: 'BUFFER HOTSPOT',
                interactive: true,
                title: '<img src="styles/legend/BUFFERHOTSPOT_1.png" /> BUFFER HOTSPOT'
            });
var format_TITIKHOTSPOT_2 = new ol.format.GeoJSON();
var features_TITIKHOTSPOT_2 = format_TITIKHOTSPOT_2.readFeatures(json_TITIKHOTSPOT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TITIKHOTSPOT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKHOTSPOT_2.addFeatures(features_TITIKHOTSPOT_2);
cluster_TITIKHOTSPOT_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TITIKHOTSPOT_2
});
var lyr_TITIKHOTSPOT_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TITIKHOTSPOT_2, 
                style: style_TITIKHOTSPOT_2,
                popuplayertitle: 'TITIK HOTSPOT',
                interactive: false,
                title: '<img src="styles/legend/TITIKHOTSPOT_2.png" /> TITIK HOTSPOT'
            });
var format_KAWASANHUTANLINDUNG_3 = new ol.format.GeoJSON();
var features_KAWASANHUTANLINDUNG_3 = format_KAWASANHUTANLINDUNG_3.readFeatures(json_KAWASANHUTANLINDUNG_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KAWASANHUTANLINDUNG_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANHUTANLINDUNG_3.addFeatures(features_KAWASANHUTANLINDUNG_3);
var lyr_KAWASANHUTANLINDUNG_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANHUTANLINDUNG_3, 
                style: style_KAWASANHUTANLINDUNG_3,
                popuplayertitle: 'KAWASAN HUTAN LINDUNG',
                interactive: false,
                title: '<img src="styles/legend/KAWASANHUTANLINDUNG_3.png" /> KAWASAN HUTAN LINDUNG'
            });
var format_BATASADMINISTRASIKABUPATEN_4 = new ol.format.GeoJSON();
var features_BATASADMINISTRASIKABUPATEN_4 = format_BATASADMINISTRASIKABUPATEN_4.readFeatures(json_BATASADMINISTRASIKABUPATEN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BATASADMINISTRASIKABUPATEN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASADMINISTRASIKABUPATEN_4.addFeatures(features_BATASADMINISTRASIKABUPATEN_4);
var lyr_BATASADMINISTRASIKABUPATEN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASADMINISTRASIKABUPATEN_4, 
                style: style_BATASADMINISTRASIKABUPATEN_4,
                popuplayertitle: 'BATAS ADMINISTRASI KABUPATEN',
                interactive: false,
                title: '<img src="styles/legend/BATASADMINISTRASIKABUPATEN_4.png" /> BATAS ADMINISTRASI KABUPATEN'
            });

lyr_CITRAGOOGLESATELITE_0.setVisible(true);lyr_BUFFERHOTSPOT_1.setVisible(true);lyr_TITIKHOTSPOT_2.setVisible(true);lyr_KAWASANHUTANLINDUNG_3.setVisible(true);lyr_BATASADMINISTRASIKABUPATEN_4.setVisible(true);
var layersList = [lyr_CITRAGOOGLESATELITE_0,lyr_BUFFERHOTSPOT_1,lyr_TITIKHOTSPOT_2,lyr_KAWASANHUTANLINDUNG_3,lyr_BATASADMINISTRASIKABUPATEN_4];
lyr_BUFFERHOTSPOT_1.set('fieldAliases', {'fid': 'fid', 'latitude': 'latitude', 'longitude': 'longitude', 'brightness': 'brightness', 'scan': 'scan', 'track': 'track', 'acq_date': 'acq_date', 'acq_time': 'acq_time', 'satellite': 'satellite', 'instrument': 'instrument', 'confidence': 'confidence', 'version': 'version', 'bright_t31': 'bright_t31', 'frp': 'frp', 'daynight': 'daynight', 'type': 'type', });
lyr_TITIKHOTSPOT_2.set('fieldAliases', {'fid': 'fid', 'latitude': 'latitude', 'longitude': 'longitude', 'brightness': 'brightness', 'scan': 'scan', 'track': 'track', 'acq_date': 'acq_date', 'acq_time': 'acq_time', 'satellite': 'satellite', 'instrument': 'instrument', 'confidence': 'confidence', 'version': 'version', 'bright_t31': 'bright_t31', 'frp': 'frp', 'daynight': 'daynight', 'type': 'type', });
lyr_KAWASANHUTANLINDUNG_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'fcode': 'fcode', 'metadata': 'metadata', 'srs_id': 'srs_id', 'namobj': 'namobj', 'remark': 'remark', 'no_reg': 'no_reg', 'kode_prov': 'kode_prov', 'fungsikws': 'fungsikws', 'noskkws': 'noskkws', 'tglskkws': 'tglskkws', 'lskkws': 'lskkws', 'luas_cylin': 'luas_cylin', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', 'Fungsi': 'Fungsi', 'keterangan': 'keterangan', });
lyr_BATASADMINISTRASIKABUPATEN_4.set('fieldAliases', {'WADMKK': 'WADMKK', 'LUAS': 'LUAS', 'Angka': 'Angka', });
lyr_BUFFERHOTSPOT_1.set('fieldImages', {'fid': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'brightness': 'TextEdit', 'scan': 'TextEdit', 'track': 'TextEdit', 'acq_date': 'DateTime', 'acq_time': 'Range', 'satellite': 'TextEdit', 'instrument': 'TextEdit', 'confidence': 'Range', 'version': 'TextEdit', 'bright_t31': 'TextEdit', 'frp': 'TextEdit', 'daynight': 'TextEdit', 'type': 'Range', });
lyr_TITIKHOTSPOT_2.set('fieldImages', {'fid': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'brightness': 'TextEdit', 'scan': 'TextEdit', 'track': 'TextEdit', 'acq_date': 'DateTime', 'acq_time': 'Range', 'satellite': 'TextEdit', 'instrument': 'TextEdit', 'confidence': 'Range', 'version': 'TextEdit', 'bright_t31': 'TextEdit', 'frp': 'TextEdit', 'daynight': 'TextEdit', 'type': 'Range', });
lyr_KAWASANHUTANLINDUNG_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'fcode': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'namobj': 'TextEdit', 'remark': 'TextEdit', 'no_reg': 'TextEdit', 'kode_prov': 'Range', 'fungsikws': 'TextEdit', 'noskkws': 'TextEdit', 'tglskkws': 'DateTime', 'lskkws': 'TextEdit', 'luas_cylin': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', 'Fungsi': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_BATASADMINISTRASIKABUPATEN_4.set('fieldImages', {'WADMKK': 'TextEdit', 'LUAS': 'TextEdit', 'Angka': 'TextEdit', });
lyr_BUFFERHOTSPOT_1.set('fieldLabels', {'fid': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'brightness': 'no label', 'scan': 'no label', 'track': 'no label', 'acq_date': 'no label', 'acq_time': 'no label', 'satellite': 'no label', 'instrument': 'no label', 'confidence': 'no label', 'version': 'no label', 'bright_t31': 'no label', 'frp': 'no label', 'daynight': 'no label', 'type': 'no label', });
lyr_TITIKHOTSPOT_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'brightness': 'inline label - visible with data', 'scan': 'inline label - visible with data', 'track': 'inline label - visible with data', 'acq_date': 'inline label - visible with data', 'acq_time': 'inline label - visible with data', 'satellite': 'inline label - visible with data', 'instrument': 'inline label - visible with data', 'confidence': 'inline label - visible with data', 'version': 'inline label - visible with data', 'bright_t31': 'inline label - visible with data', 'frp': 'inline label - visible with data', 'daynight': 'inline label - visible with data', 'type': 'inline label - visible with data', });
lyr_KAWASANHUTANLINDUNG_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'OBJECTID': 'inline label - visible with data', 'fcode': 'inline label - visible with data', 'metadata': 'inline label - visible with data', 'srs_id': 'inline label - visible with data', 'namobj': 'inline label - visible with data', 'remark': 'inline label - visible with data', 'no_reg': 'inline label - visible with data', 'kode_prov': 'inline label - visible with data', 'fungsikws': 'inline label - visible with data', 'noskkws': 'inline label - visible with data', 'tglskkws': 'inline label - visible with data', 'lskkws': 'inline label - visible with data', 'luas_cylin': 'inline label - visible with data', 'shape_Leng': 'inline label - visible with data', 'shape_Area': 'inline label - visible with data', 'Fungsi': 'inline label - visible with data', 'keterangan': 'inline label - visible with data', });
lyr_BATASADMINISTRASIKABUPATEN_4.set('fieldLabels', {'WADMKK': 'inline label - visible with data', 'LUAS': 'inline label - visible with data', 'Angka': 'inline label - visible with data', });
lyr_BATASADMINISTRASIKABUPATEN_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});