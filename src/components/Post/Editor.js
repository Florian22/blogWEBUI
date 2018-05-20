import React from "react";
import { Link } from 'react-router-dom';

import {EditorState, convertToRaw, ContentState} from "draft-js";
//import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

//Redux
import {connect} from "react-redux";
import { Field, reduxForm, formValueSelector } from 'redux-form';
import * as actionCreators from "../../actions/index";

//Tinymce c
/*import tinymce from 'tinymce/tinymce';
// A theme is also required
import 'tinymce/themes/modern/theme';

// Any plugins you want to use has to be imported
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';

*/

import { Editor } from '@tinymce/tinymce-react';


const mapStatetoProps = (state) => {
    console.log(state);
    return state;
  }

class ArticleEditor extends React.Component {

    componentWillMount() {
      //  console.log((this.props.match.params).length);
        if(this.props.match.params.id){
            this.props.loadArticle(this.props.match.params.id);
            }
        }

        componentWillUnmount() {
            this.props.onUnloadArticle();
        }

    constructor(props){
        super(props);
        this.onTitleChange = ev => {
            console.log(ev.target.value);
            this.setState({...this.state, article_title: ev.target.value});
        }
        this.onBackgroundURLChange = ev => {
            console.log(ev.target.value);
            this.setState({...this.state, article_background_url: ev.target.value});
        }
       // this.state = {editorBodyState : EditorState.createEmpty(), api_response: false};
       this.state = {articlecontent : "", api_response: false};
        }
   
    update(id, contentToSave){
        //console.log(this.props);
        //console.log(editorBodyState.getCurrentContent.hasText);
        if(this.props.currentuser){
            console.log("saving...");
        this.props.updateArticle(id, {data: {title: this.props.article.title , body: contentToSave}, token: this.props.currentuser.token});
        }else{
            alert("Not loggedIn");
        }
        //console.log(id + " " + JSON.stringify(contentToSave));
    }

    create(article_title, article_body, background_url){
        //console.log(this.props);
        //console.log(editorBodyState.getCurrentContent.hasText);
        if(this.props.currentuser){
            console.log("saving...");
        this.props.createArticle({data: {title: article_title , body: article_body, imgURL: background_url}, token: this.props.currentuser.token});
        
        }else{
            alert("Not loggedIn");
        }
        //console.log(id + " " + JSON.stringify(contentToSave));
    }

    /*onChange(editorContent){
        this.setState({editorContent});
        console.log(this.props);
    }*/

    handleEditorChange = (e) => {
        this.setState({articlecontent: e.target.getContent()});
       // console.log('Content was updated:', e.target.getContent());
        //console.log(this.state);
      }
   
     render() {
         if(this.props.params){
                if(this.props.article){
                    // Only if it's the first time I get data from rest API, I don't want to to this if I press keys
                    if((this.state.articlecontent == "") && (this.state.api_response == false)){
                        const html = this.props.article.body;
                        if (html) {
                            this.state = {articlecontent: html};
                        }
                        this.state.api_response = true;
                    }

            return (
                <div>
                    <img src = {this.props.article.imgURL} height="200"></img>
                    <h2>{this.props.article.title}</h2>
                <Editor
                apiKey= {"vm6crp29hy1ie0rvlxixdf0bmwobcolypychmon56bfh70k7"}
                initialValue= {this.state.articlecontent}
                init={{
                    plugins: 'link image code',
                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
                    branding: true,
                    height : '300',
                    }}
                onChange={this.handleEditorChange}
                    />
                    <button onClick={() => {this.update(this.props.article._id, this.state.articlecontent ) }} >Save</button>
                </div>
            );
            }else{
                return(null);
                }
            // Case new article
            }else{
                return(
                
                    <div>
                <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Title"
                      onChange={this.onTitleChange.bind(this)} 
                      />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Background URL"
                      onChange={this.onBackgroundURLChange.bind(this)} 
                      />
                  </fieldset>
                
                <Editor
                apiKey= {"vm6crp29hy1ie0rvlxixdf0bmwobcolypychmon56bfh70k7"}
                init={{
                 plugins: 'link image code',
                 toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
                 branding: true,
                 height : '300',
                 }}
                onChange={this.handleEditorChange}
                 />
                 <Link to="/"><button onClick={() => {this.create(this.state.article_title, this.state.articlecontent, this.article_background_url ) }}>Create</button>
                 </Link>
                </div>
                );
            }
        }
    }

    export default connect(mapStatetoProps,actionCreators)(ArticleEditor);

    //<button onClick = {this.props.updateArticle(this.props.article._id, " ")} >Save</button>

    /*
    <Editor onEditorStateChange={this.onChange.bind(this)}
                    editorState={this.state.editorBodyState}
                    toolbarClassName="rdw-storybook-toolbar"
                    wrapperClassName="rdw-storybook-wrapper"
                    editorClassName="rdw-storybook-editor"
                    placeholder = "This is an editor"/>
                    */




/*
//Case it's a new article
 <div class="form-group">
                    <input class="form-control input-sm" id="title" placeholder="Title" type="text"/>
                    <br></br>
                    <input class="form-control input-sm" id="background_picture" placeholder="Backgound picture" type="url"/>
                    </div>
                    
            

            */