const SETTINGS = {
  width: 700,
  height: 450,
  typeImg: 'image/png',
  zoomMode: 'autoshrink',
};

export const cmlToBase64 = (cml, success, err) => {
  window.MarvinJSUtil.getPackage('marvinjs')
    .then(
      (marvinName) => {
        marvinName.onReady(() => {
          const base64 = marvinName.ImageExporter.mrvToDataUrl(cml,
            SETTINGS.typeImg, SETTINGS);
          success(base64);
        });
      },
      (error) => {
        err(error);
      },
    );
};

export const textToCml = (text, success, err) => {
  const _this = this;
  window.MarvinJSUtil.getEditor('#marvinjs')
    .then(
      (sketcher) => {
        sketcher.importStructure('auto', text)
          .then(
            () => {
              sketcher.exportStructure('mrv')
                .then(
                  (cml) => {
                    success(cml);
                  },
                  (error) => {
                    err(error);
                  },
                );
            },
            (error) => {
              err(error);
            },

          );
      },
      (error) => {
        err(error);
      },
    );
};

//
export const importCml = (cml, err) => {
  window.MarvinJSUtil.getEditor('#marvinjs')
    .then(
      (sketcher) => {
        sketcher.importStructure('mrv', cml);
      },
      (error) => {
        err(error);
      },
    );
};

export const exportCmlBase64 = (success, err) => {
  window.MarvinJSUtil.getEditor('#marvinjs')
    .then(
      (sketcher) => {
        sketcher.exportStructure('mrv')
          .then(
            (cml) => {
              cmlToBase64(cml,
                (base64) => {
                  success({ cml, base64 });
                },
                (error) => {
                  err(error);
                },
              );
            },
            (error) => {
              err(error);
            });
      },
    );
};

export const exportCml = () => window.MarvinJSUtil.getEditor('#marvinjs')
  .then(sketcher => sketcher.exportStructure('mrv'));

export const clearEditor = () => window.MarvinJSUtil.getEditor('#marvinjs')
  .then(
    (sketcher) => {
      sketcher.importStructure('mrv', '<cml><MDocument></MDocument></cml>');
    },
  );

export const clearMarvin = (err) => {
  importCml('<cml><MDocument></MDocument></cml>',
    (error) => {
      err(error);
    },
  );
};

export const addBase64Arr = (arrCml, success) => {
  window.MarvinJSUtil.getPackage('marvinjs')
    .then(
      (marvinName) => {
        marvinName.onReady(() => {
          const tt = arrCml.map((obj) => {
            obj.base64 = marvinName.ImageExporter.mrvToDataUrl(obj.data,
              SETTINGS.typeImg, SETTINGS);
            return obj;
          });
          success(tt);
        });
      },
    );
};

export const addBase64Obj = (obj, success) => {
  window.MarvinJSUtil.getPackage('marvinjs')
    .then(
      (marvinName) => {
        marvinName.onReady(() => {
          obj.base64 = marvinName.ImageExporter.mrvToDataUrl(obj.data, SETTINGS.typeImg, SETTINGS);
          success(obj);
        });
      },
    );
};
