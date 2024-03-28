function PermissionModule() {
    return (
        <div className="card my-4 border">
            <div className="card-header">
                <input type="checkbox" className="check-all" name="permission_id" id="post" />
                <label htmlFor="post" className="m-2">Module Post</label>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <input type="checkbox" className="permission m-2" value="2" name="permission_id[]" id="post.add" />
                        <label htmlFor="post.add">Add Post</label>
                    </div>
                    <div className="col-md-3">
                        <input type="checkbox" className="permission m-2" value="3" name="permission_id[]" id="post.edit" />
                        <label htmlFor="post.edit">Edit Post</label>
                    </div>
                    <div className="col-md-3">
                        <input type="checkbox" className="permission m-2" value="4" name="permission_id[]" id="post.delete" />
                        <label htmlFor="post.delete">Delete Post</label>
                    </div>
                    <div className="col-md-3">
                        <input type="checkbox" className="permission m-2" value="5" name="permission_id[]" id="post.list" />
                        <label htmlFor="post.list">List Post</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PermissionModule;