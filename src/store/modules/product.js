import { defineStore } from 'pinia'

const useProductStore = defineStore('product', {
    state: () => {
        return {
            mainList: [
                { title: '团队作品', single: true },
                { title: '新圩港-2D', link: 'http://218.92.67.67:9004/', author: '', photo_url: 'textures/新圩港-2D.png' },
                { title: '新圩港-3D', link: 'http://218.92.67.67:9004/', author: '', photo_url: 'textures/新圩港-3D.png' },


                { title: '最新作品', single: true },
                { title: '圆点介绍', link: 'examples/mixed_html/point_info_show.html', author: '', photo_url: 'textures/圆点介绍.png' },
                { title: '机房监测', link: 'examples/visualization/machine_room.html', author: '', photo_url: 'textures/机房监测.png' },
                { title: '漫画-蜘蛛侠', link: 'examples/comic/spider-man.html', author: '', photo_url: 'textures/漫画-蜘蛛侠.png' },


                { title: '热门作品', single: true },
                { title: '银河系', link: 'examples/particles/galaxy_generator.html', author: '', photo_url: 'textures/银河系.png' },
                { title: '虚幻花朵', link: 'examples/processing/webgl_postprocessing_unreal_bloom.html', author: '', photo_url: 'textures/虚幻花朵.png' },
                { title: '迷失太空', link: 'examples/particles/lost_in_space.html', author: '', photo_url: 'textures/迷失太空.png' },


                { title: '入门案例', single: true },
                { title: '定制模板', link: 'examples/basic/template.html', author: '', photo_url: 'textures/定制模板.png' },
                { title: '正方体', link: 'examples/basic/cube_basic.html', author: '', photo_url: 'textures/正方体.png' },
                { title: '星球漫游', link: 'examples/basic/planet_walk.html', author: '', photo_url: 'textures/星球漫游.png' },
                { title: '基础动画', link: 'examples/basic/animate_basic.html', author: '', photo_url: 'textures/基础动画.png' },
                { title: '顶点绘制', link: 'examples/basic/buffer_basic.html', author: '', photo_url: 'textures/顶点绘制.png' },
                { title: '3D字体', link: 'examples/basic/fonts_basic.html', author: '', photo_url: 'textures/3D字体.png' },
                { title: '基础阴影投射', link: 'examples/basic/shadow_basic.html', author: '', photo_url: 'textures/基础阴影投射.png' },
                { title: '模型导入加载', link: 'examples/basic/import_model_basic.html', author: '', photo_url: 'textures/模型导入加载.png' },
                { title: '真实性渲染模型', link: 'examples/basic/realistic_render.html', author: '', photo_url: 'textures/真实性渲染模型.png' },
                { title: '真实性渲染模板', link: 'examples/basic/realistic_render_template.html', author: '', photo_url: 'textures/真实性渲染模板.png' },

                { title: '粒子系统', single: true },
                { title: '粒子平面墙', link: 'examples/particles/points_wall.html', author: '', photo_url: 'textures/粒子平面墙.png' },
                { title: '迷失太空', link: 'examples/particles/lost_in_space.html', author: '', photo_url: 'textures/迷失太空.png' },
                { title: '粒子海浪', link: 'examples/particles/particles_sea.html', author: '', photo_url: 'textures/粒子海浪.png' },
                { title: '银河系', link: 'examples/particles/galaxy_generator.html', author: '', photo_url: 'textures/银河系.png' },

                { title: '二维漫画', single: true },
                { title: '漫画-蜘蛛侠', link: 'examples/comic/spider-man.html', author: '', photo_url: 'textures/漫画-蜘蛛侠.png' },

                { title: '融合前端HTML', single: true },
                { title: '页面滚动', link: 'examples/mixed_html/scroll_page.html', author: '', photo_url: 'textures/页面滚动.png' },
                { title: '圆点介绍', link: 'examples/mixed_html/point_info_show.html', author: '', photo_url: 'textures/圆点介绍.png' },
                { title: '加载进度条', link: 'examples/mixed_html/progress_load.html', author: '', photo_url: 'textures/加载进度条.png' },




                { title: '3d可视化', single: true },
                { title: '电脑主机拆解', link: 'examples/visualization/computer_host.html', author: '', photo_url: 'textures/电脑主机拆解.png' },
                { title: '机房监测', link: 'examples/visualization/machine_room.html', author: '', photo_url: 'textures/机房监测.png' },

                { title: '着色器', single: true },
                { title: '入门', link: 'examples/shader/shader_basic.html', author: '', photo_url: 'textures/着色器入门.png' },
                { title: '进阶', link: 'examples/shader/shader_advance.html', author: '', photo_url: 'textures/着色器进阶.png' },
                { title: '中国国旗', link: 'examples/shader/shader_national_flag.html', author: '', photo_url: 'textures/中国国旗.png' },


                { title: '后期处理', single: true },
                { title: '后期处理入门', link: 'examples/processing/post_processing_basic.html', author: '', photo_url: 'textures/后期处理入门.png' },
                { title: '虚幻花朵', link: 'examples/processing/webgl_postprocessing_unreal_bloom.html', author: '', photo_url: 'textures/虚幻花朵.png' },


                { title: '项目总结', single: true },
                { title: '鬼屋', link: 'examples/project/haunted_house.html', author: '', photo_url: 'textures/鬼屋.png' },



            ]
        }
    }
})

export default useProductStore