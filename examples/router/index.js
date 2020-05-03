import routerConfig from './router.json';
const defaultPath = '/lgsn/component/installation';

// 引入组件文档
const loadDocs = function(path) {
  return r => require.ensure([], () =>
    r(require(`../docs${path}.md`)), 'zh-CN');
};

// 引入文档页面
const loadPage = function(path) {
  return r => require.ensure([], () =>
    r(require(`../pages/${path}.vue`)), 'zh-CN');
};

// 注册路由
const registerRouter = (config) => {
  let route = [];

  // 添加默认路由
  route.push({
    path: '/lgsn/component',
    redirect: defaultPath,
    component: loadPage('component'),
    children: []
  });

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
      path: `${childrenItem.path.slice(1)}`,
      meta: {
        title: childrenItem.title || childrenItem.name
      },
      name: `component-${childrenItem.name}`,
      component: component
    };

    route[0].children.push(child);
  };

  return route;
};

let routes = registerRouter(routerConfig);
routes = routes.concat([
  {
    path: '/',
    redirect: defaultPath
  },
  {
    path: '*',
    redirect: defaultPath
  }
]);
export default routes;
