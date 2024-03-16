const os = require('os');
const fs = require('fs');

//Function1
const size = 1024;
const user = os.userInfo().username;
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const cpu = os.cpus()[0].model;
const totalMemoryGB = gb(totalMemory).toFixed(1);
const freeMemoryGB = gb(freeMemory).toFixed(1);

function kb(bytes) {
  return bytes / size;
}
function mb(bytes) {
  return kb(bytes) / size;
}
function gb(bytes) {
  return mb(bytes) / size;
}

const data = `Usuario: ${user}, Memoria total: ${totalMemoryGB} GB, Memoria libre: ${freeMemoryGB} GB, CPU: ${cpu}`;

function getInfoAndWriteFile(road, data, cb) {
  fs.writeFile(road, data, function (err) {
    if (err) {
      console.error('No se ha podido guardar la información', err);
    } else {
      console.log('Información guardada correctamente');
    }
  });
}

getInfoAndWriteFile(__dirname + '/infoUser.txt', data, console.log);

//function2

function readFileAndTransformToJSON(road, cb) {
  fs.readFile(road, 'utf8', (err, data) => {
    if (err) {
      console.error('No se ha podido leer el archivo:', err);
      return;
    }

    try {
      const parsedData = data.split(', ');
      const owner = parsedData[0].split(': ')[1];
      const totalMemoryGB = parsedData[1].split(': ')[1];
      const freeMemoryGB = parsedData[2].split(': ')[1];
      const cpu = parsedData[3].split(': ')[1];

      const transformedData = [
        {
          propiedades: {
            owner: owner,
            cpu: cpu,
            totalMemoryGB: totalMemoryGB,
            freeMemoryGB: freeMemoryGB,
          },
        },
      ];

      console.log(transformedData);
    } catch (error) {
      console.error('Error al parsear el archivo:', error);
    }
  });
}

readFileAndTransformToJSON(__dirname + '/infoUser.txt');
