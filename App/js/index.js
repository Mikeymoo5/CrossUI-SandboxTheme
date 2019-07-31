xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label7")
                .setName("WelcomeText")
                .setDesc("Welcomes users")
                .setLeft("0.8333333333333334em")
                .setTop("0.8333333333333334em")
                .setWidth("13.5em")
                .setHeight("3.6666666666666665em")
                .setCaption("Welcome!")
                .setFontSize("3em")
                .setFontWeight("normal")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});