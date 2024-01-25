function design() {
    window.addEventListener('load', () => {
        // set the location of the external libraries
        OV.SetExternalLibLocation('../libs');

        // get the parent element of the viewer
        let parentDiv = document.getElementById('viewer');

        // initialize the viewer with the parent element and some parameters
        let viewer = new OV.EmbeddedViewer(parentDiv, {
            camera: new OV.Camera(
                new OV.Coord3D(-1.5, 2.0, 3.0),
                new OV.Coord3D(0.0, 0.0, 0.0),
                new OV.Coord3D(0.0, 1.0, 0.0),
                45.0
            ),
            backgroundColor: new OV.RGBAColor(255, 255, 255, 255),
            defaultColor: new OV.RGBColor(200, 200, 200),
            edgeSettings: new OV.EdgeSettings(false, new OV.RGBColor(0, 0, 0), 1),
            environmentSettings: new OV.EnvironmentSettings(
                [
                    'assets/envmaps/fishermans_bastion/posx.jpg',
                    'assets/envmaps/fishermans_bastion/negx.jpg',
                    'assets/envmaps/fishermans_bastion/posy.jpg',
                    'assets/envmaps/fishermans_bastion/negy.jpg',
                    'assets/envmaps/fishermans_bastion/posz.jpg',
                    'assets/envmaps/fishermans_bastion/negz.jpg'
                ],
                false
            )
        });

        // load a model providing model urls
        viewer.LoadModelFromUrlList([
            'model.obj',
            'model.mtl'
        ]);
    });
};