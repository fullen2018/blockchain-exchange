(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"/0iG":function(e,a,s){},UFKO:function(e,a,s){"use strict";s.r(a);s("2qtc");var t=s("kLXV"),r=s("jehZ"),l=s.n(r),n=(s("y8nQ"),s("Vl3Y")),i=(s("5NDa"),s("5rEg")),o=s("q1tI"),d=s.n(o),p=s("8ws1"),c=s("/0iG"),h=s.n(c);class m extends o["Component"]{constructor(){super(...arguments),this.state={visible:!1,id:"",name:"",password:"",telephone:"",email:""},this.showModel=(()=>{this.setState({visible:!0})}),this.handleOk=(e=>{this.props.form.validateFieldsAndScroll((e,a)=>{e||p["a"]({url:"/exchange-web/user/register.action",data:a}).then(e=>{this.setState({visible:!1}),this.props.refrush()})})}),this.handleCancel=(e=>{this.setState({visible:!1})})}render(){var e=this.props.form.getFieldDecorator,a={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}};return d.a.createElement("div",null,d.a.createElement("span",{onClick:this.showModel},this.props.children),d.a.createElement(t["a"],{title:"\u65b0\u589e\u7528\u6237",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},d.a.createElement(n["a"],l()({},a,{className:h.a.be_add_user_form}),d.a.createElement(n["a"].Item,{label:"\u7528\u6237\u540d"},e("name",{rules:[{required:!0,message:"Please input your name!"}]})(d.a.createElement(i["a"],{type:"text"}))),d.a.createElement(n["a"].Item,{label:"\u8f93\u5165\u5bc6\u7801"},e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(d.a.createElement(i["a"],{type:"password"}))),d.a.createElement(n["a"].Item,{label:"\u786e\u8ba4\u5bc6\u7801"},e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(d.a.createElement(i["a"],{type:"password",onBlur:this.handleConfirmBlur}))))))}}a["default"]=n["a"].create({name:"addUser"})(m)}}]);