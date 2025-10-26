var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_titik_1 = new ol.format.GeoJSON();
var features_titik_1 = format_titik_1.readFeatures(json_titik_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titik_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titik_1.addFeatures(features_titik_1);
var lyr_titik_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titik_1, 
                style: style_titik_1,
                popuplayertitle: 'titik',
                interactive: true,
                title: '<img src="styles/legend/titik_1.png" /> titik'
            });
var format_garis_2 = new ol.format.GeoJSON();
var features_garis_2 = format_garis_2.readFeatures(json_garis_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_garis_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_garis_2.addFeatures(features_garis_2);
var lyr_garis_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_garis_2, 
                style: style_garis_2,
                popuplayertitle: 'garis',
                interactive: true,
                title: '<img src="styles/legend/garis_2.png" /> garis'
            });
var format_gariskoridor_3 = new ol.format.GeoJSON();
var features_gariskoridor_3 = format_gariskoridor_3.readFeatures(json_gariskoridor_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gariskoridor_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gariskoridor_3.addFeatures(features_gariskoridor_3);
var lyr_gariskoridor_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gariskoridor_3, 
                style: style_gariskoridor_3,
                popuplayertitle: 'gariskoridor',
                interactive: true,
                title: '<img src="styles/legend/gariskoridor_3.png" /> gariskoridor'
            });
var format_luasan_4 = new ol.format.GeoJSON();
var features_luasan_4 = format_luasan_4.readFeatures(json_luasan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_luasan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_luasan_4.addFeatures(features_luasan_4);
var lyr_luasan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_luasan_4, 
                style: style_luasan_4,
                popuplayertitle: 'luasan',
                interactive: true,
                title: '<img src="styles/legend/luasan_4.png" /> luasan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_titik_1.setVisible(true);lyr_garis_2.setVisible(true);lyr_gariskoridor_3.setVisible(true);lyr_luasan_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_titik_1,lyr_garis_2,lyr_gariskoridor_3,lyr_luasan_4];
lyr_titik_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'X': 'X', 'Y': 'Y', });
lyr_garis_2.set('fieldAliases', {'id': 'id', 'Panjang': 'Panjang', 'Nama': 'Nama', });
lyr_gariskoridor_3.set('fieldAliases', {'id': 'id', 'Panjang': 'Panjang', 'Nama': 'Nama', });
lyr_luasan_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'luas': 'luas', });
lyr_titik_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'X': '', 'Y': '', });
lyr_garis_2.set('fieldImages', {'id': 'TextEdit', 'Panjang': 'TextEdit', 'Nama': '', });
lyr_gariskoridor_3.set('fieldImages', {'id': 'TextEdit', 'Panjang': '', 'Nama': '', });
lyr_luasan_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'luas': 'TextEdit', });
lyr_titik_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_garis_2.set('fieldLabels', {'id': 'no label', 'Panjang': 'no label', 'Nama': 'no label', });
lyr_gariskoridor_3.set('fieldLabels', {'id': 'no label', 'Panjang': 'no label', 'Nama': 'no label', });
lyr_luasan_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'luas': 'no label', });
lyr_luasan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});