import { defineStore } from 'pinia'

const useProductStore = defineStore('product', {
    state: () => {
        return {
            mainList: [
                { title: '最新作品', single: true },
                { title: '圆点介绍', link: 'examples/mixed_html/point_info_show.html', author: '' },
                { title: '机房监测', link: 'examples/visualization/machine_room.html', author: '' },
                { title: '漫画-蜘蛛侠', link: 'examples/comic/spider-man.html', author: '' },

                { title: '热门作品', single: true },
                { title: '银河系', link: 'examples/particles/galaxy_generator.html', author: '' },
                { title: '虚幻花朵', link: 'examples/processing/webgl_postprocessing_unreal_bloom.html', author: '' },
                { title: '迷失太空', link: 'examples/particles/lost_in_space.html', author: '' },


                { title: '入门案例', single: true },
                { title: '定制模板', link: 'examples/basic/template.html', author: '' },
                { title: '正方体', link: 'examples/basic/cube_basic.html', author: '' },
                { title: '星球漫游', link: 'examples/basic/planet_walk.html', author: '' },
                { title: '基础动画', link: 'examples/basic/animate_basic.html', author: '' },
                { title: '顶点绘制', link: 'examples/basic/buffer_basic.html', author: '' },
                { title: '3D字体', link: 'examples/basic/fonts_basic.html', author: '' },
                { title: '基础阴影投射', link: 'examples/basic/shadow_basic.html', author: '' },
                { title: '模型导入加载', link: 'examples/basic/import_model_basic.html', author: '' },
                { title: '真实性渲染模型', link: 'examples/basic/realistic_render.html', author: '' },
                
                {title:'粒子系统',single:true},
                { title: '粒子平面墙', link: 'examples/particles/points_wall.html', author: '' },
                { title: '迷失太空', link: 'examples/particles/lost_in_space.html', author: '' },
                { title: '粒子海浪', link: 'examples/particles/particles_sea.html', author: '' },
                { title: '银河系', link: 'examples/particles/galaxy_generator.html', author: '' },

                {title:'二维漫画',single:true},
                { title: '漫画-蜘蛛侠', link: 'examples/comic/spider-man.html', author: '' },

                {title:'融合前端HTML',single:true},
                { title: '页面滚动', link: 'examples/mixed_html/scroll_page.html', author: '' },
                { title: '圆点介绍', link: 'examples/mixed_html/point_info_show.html', author: '' },


                {title:'3d可视化',single:true},
                { title: '电脑主机拆解', link: 'examples/visualization/computer_host.html', author: '' },
                { title: '机房监测', link: 'examples/visualization/machine_room.html', author: '' },
                

                {title:'后期处理',single:true},
                { title: '虚幻花朵', link: 'examples/processing/webgl_postprocessing_unreal_bloom.html', author: '' },
            ]
        }
    }
})

export default useProductStore