class ApiError extends Error{
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }
    static err(message) {
        return new ApiError(500,message)
    }
}

module.exports = ApiError