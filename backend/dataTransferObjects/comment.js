class commentDTO {
    constructor(comment){
        this._id = comment._id;
        this.content = comment.content;
        this.AuthorUserName  =comment.author.username;
        this.createdAt = comment.createdAt;

    }
}

module.exports = commentDTO;