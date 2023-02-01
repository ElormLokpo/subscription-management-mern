class ErrorHanlder extends Error{
    constructor(errMessage){
        super();
        this.errMessage = errMessage;

    }
}

module.exports = ErrorHanlder;