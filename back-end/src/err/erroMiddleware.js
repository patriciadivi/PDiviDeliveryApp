const CustomErro = require('../err/CustomErro');

class GlobalError {
    // constructor(defaultStatus = 500) {
    //     this.defaultStatus = defaultStatus;
    // }

    handle(error, _req, res, _next) {
        if (error instanceof CustomErro) {
            return res.status(error.status).json({ message: error.message });
        }
        return res.status(500).json({ message: `>>>> ${error.message}` });
    }
}

const globalError = new GlobalError();

module.exports = globalError;




