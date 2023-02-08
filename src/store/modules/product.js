import { defineStore } from 'pinia'

const useProductStore = defineStore('product', {
    state: () => {
        return {
            mainList: [
                { title: '最新作品', single: true },
                { title: '粒子平面墙', link: 'k/z/test.html', author: '' },
                { title: '粒子平面墙', link: '../../examples/Particles/points_wall.html', author: '' },
                { title: '粒子海浪', link: 'examples/Particles/particles_sea.html', author: '' },
                { title: '银河系', link: 'examples/Particles/galaxy_generator.html', author: '' },


                { title: '热门作品', single: true },
                { title: '银河系', link: 'examples/Particles/galaxy_generator.html', author: '' },
                { title: '虚幻花朵', link: 'examples/Processing/webgl_postprocessing_unreal_bloom.html', author: '' },
                { title: '迷失太空', link: 'examples/Particles/lost_in_space.html', author: '' },


                { title: '入门案例', single: true },
                { title: '定制模板', link: 'examples/Basic/template.html', author: '' },
                { title: '正方体', link: 'examples/Basic/cube_basic.html', author: '' },
                { title: '星球漫游', link: 'examples/Basic/planet_walk.html', author: '' },
                { title: '基础动画', link: 'examples/Basic/animate_basic.html', author: '' },
                { title: '顶点绘制', link: 'examples/Basic/buffer_basic.html', author: '' },
                { title: '3D字体', link: 'examples/Basic/fonts_basic.html', author: '' },
                { title: '基础阴影投射', link: 'examples/Basic/shadow_basic.html', author: '' },
                { title: '模型导入加载', link: 'examples/Basic/import_model_basic.html', author: '' },
                { title: '真实性渲染模型', link: 'examples/Basic/realistic_render.html', author: '' },
                

                {title:'粒子系统',single:true},
                { title: '粒子平面墙', link: 'examples/Particles/points_wall.html', author: '' },
                { title: '迷失太空', link: 'examples/Particles/lost_in_space.html', author: '' },
                { title: '粒子海浪', link: 'examples/Particles/particles_sea.html', author: '' },
                { title: '银河系', link: 'examples/Particles/galaxy_generator.html', author: '' },

                {title:'二维漫画',single:true},
                { title: '漫画-蜘蛛侠', link: 'examples/Comic/spider-man.html', author: '' },


                {title:'3d可视化',single:true},
                { title: '电脑主机拆解', link: 'examples/Visualization/disassemble_model.html', author: '' },
                

                {title:'后期处理',single:true},
                { title: '虚幻花朵', link: 'examples/Processing/webgl_postprocessing_unreal_bloom.html', author: '' },
            ]
        }
    }
})

export default useProductStore