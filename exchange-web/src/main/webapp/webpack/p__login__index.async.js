(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{2:function(e,a){},gMHI:function(e,a,r){"use strict";r.r(a);r("+L6B");var t=r("2/Rp"),o=(r("sRBo"),r("kaz8")),l=(r("y8nQ"),r("Vl3Y")),n=(r("5NDa"),r("5rEg")),s=(r("Pwec"),r("CtXQ")),m=r("q1tI"),i=r.n(m),c=r("Z63m"),u=r.n(c),p=r("usdK"),g=r("i9FS"),d=r.n(g);class f extends m["Component"]{constructor(){super(...arguments),this.handleSubmit=(e=>{this.props.form.validateFields((e,a)=>{e||(console.log("Received values of form: ",a),u()({url:"/exchange-web/login.action",method:"post",data:a,type:"json",success:function(e){console.log(e),p["a"].push("/")}}))})})}render(){var e=this.props.form.getFieldDecorator;return i.a.createElement(l["a"],{onSubmit:this.handleSubmit,className:d.a.login_form},i.a.createElement(l["a"].Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(i.a.createElement(n["a"],{prefix:i.a.createElement(s["a"],{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),i.a.createElement(l["a"].Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(i.a.createElement(n["a"],{prefix:i.a.createElement(s["a"],{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),i.a.createElement(l["a"].Item,null,e("remember",{valuePropName:"checked",initialValue:!0})(i.a.createElement(o["a"],null,"Remember me")),i.a.createElement("a",{className:"styles.login-form-forgot",href:""},"Forgot password"),i.a.createElement("br",null),i.a.createElement(t["a"],{type:"primary",onClick:this.handleSubmit,className:"styles.login_form_button"}," Log in "),i.a.createElement("br",null),i.a.createElement("a",{href:"/register"},"Register now")))}}a["default"]=l["a"].create({name:"normal_login"})(f)},i9FS:function(e,a,r){e.exports={login_form:"login_form___3QKEX",login_form_forgot:"login_form_forgot___EhlHZ",login_form_button:"login_form_button___3M5-y"}}}]);