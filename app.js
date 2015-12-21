var moodyWorld = window.moodyWorld = {};
    $(function(){
        moodyWorld.app = new DevExpress.framework.html.HtmlApplication({
        namespace: moodyWorld,
        navigationType: "slideout" ,
        navigation : [
            {
                title: "MoodyWorld",
                action: "#home",
                icon: "user",
            },
            
            {
                title: "Diary",
                action: "#diary",
                icon: "card",
            },
            
            {
                title: "Map",
                action: "#map",
                icon: "map",
            },
            
            {
                title: "Preferences",
                action: "#preferences",
                icon: "preferences",
            }
            
            ]
    });
    
    moodyWorld.home = function(){
    var viewModel = {
        title: "MoodyWorld",
    }

    return viewModel;
    }
    
    moodyWorld.diary = function(){
    var viewModel = {
        title: "Mood Diary"
    }

    return viewModel;
    }
    
    moodyWorld.map = function(){
    var viewModel = {
        title: "Moody Map",
        message: "View the mood map"
    }

    return viewModel;
    }
    
    moodyWorld.preferences = function(){
    var viewModel = {
        title: "Preferences",
        message: "Change app preferences"
    }

    return viewModel;
    }
 
    
    moodyWorld.app.router.register(":view", {view: "home"});
    moodyWorld.app.router.register(":view", {view: "diary"});
    moodyWorld.app.router.register(":view", {view: "map"});
    moodyWorld.app.router.register(":view", {view: "preferences"});
    moodyWorld.app.navigate();
});