import routerConfig from './router.json';

// 引入组件文档
const loadDocs = function(path) {
  return r => require.ensure([], () =>
    r(require(`../docs${path}.md`)), 'zh-CN');
};

// 注册路由
const registerRouter = (config) => {
  let route = [];

  // 添加子路由
  config.forEach((nav, navIndex) => {
    if (nav.children) {
      nav.children.forEach(navItem => {
        addRoute(navItem, navIndex);
      });
    } else if (nav.path) {
      addRoute(nav, navIndex);
    }
  });

  // 添加路由 md格式
  function addRoute(childrenItem, index) {
    const component = loadDocs(childrenItem.path);
    let child = {
      path: `/${childrenItem.path.slice(1)}`,
      meta: {
        title: childrenItem.title || childrenItem.name
      },
      name: `component-${childrenItem.name}`,
      component: component
    };

    route.push(child);
  };

  return route;
};

let routes = registerRouter(routerConfig);

export default routes;
