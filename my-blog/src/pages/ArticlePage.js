//import React from 'react';
import React, { Component }  from 'react';
    //----<React.Fragment> short version <> used for
    //---- multiple html tags used inside react
import articleContent from './ArticleContent';
import ArticleList from '../Components/ArticleList';

const ArticlePage = ({match})=>{
const name = match.params.name;
const article = articleContent.find(article=>article.name===name);

if(!article) return (<h1>Article does not exists</h1>);
//----To use the reusable component and show related articles and the one which is not open---//
const otherArticles = articleContent.filter(article=>article.name !=name);

return(
    <>
        <h2>{article.title}</h2>
        {article.content.map((paragraph, key)=>(
            <p key={key}>{paragraph}</p>
        ))}
        <h3>Other Articles</h3>
        <ArticleList articles={otherArticles}></ArticleList>
    </>
    );
}


export default ArticlePage