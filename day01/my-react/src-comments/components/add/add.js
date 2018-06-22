import React,{Component} from "react"
import PropTypes from "prop-types"

export default class Add extends Component{
    static proptypes={
        addComment:PropTypes.func.isRequired
    }
    addComment=()=>{
        const comment={};
        comment.username=this.refs.username.value.trim();
        comment.content=this.refs.content.value.trim();
        if(!comment.username || !comment.content){
            return
        }
        this.props.addComment(comment)
        this.refs.username.value=""
        this.refs.content.value=""
    }
    render(){
        return(
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" ref="username"/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" ref="content"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}