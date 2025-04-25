// 题库数据
const questions  = [
  { 
    question: "铸铁中平均含碳量一般为", 
    options: ["A: 0.2%", "B: 0.7%", "C: 1.5%", "D: >2.11%"], 
    correct: "D",
    categories: ["材料"],
    knowledge: ["金属材料", "材料性能"]
  },
  { 
    question: "牌号HT200表示的材料是", 
    options: ["A: 碳钢", "B: 合金钢", "C: 铸铁", "D: 黄铜"], 
    correct: "C",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  { 
    question: "被连接件的孔都不切制螺纹的螺纹联接是", 
    options: ["A: 螺栓联接", "B: 双头螺柱联接", "C: 螺钉联接", "D: 紧定螺钉联接"], 
    correct: "A",
    categories: ["螺纹"],
    knowledge: ["螺纹应用"]
  },
  { 
    question: "非螺纹密封管螺纹的牙型角为", 
    options: ["A: 0°", "B: 30°", "C: 55°", "D: 60°"], 
    correct: "C",
    categories: ["螺纹"],
    knowledge: ["螺纹参数"]
  },
  { 
    question: "在带传动中带的弹性滑动", 
    options: ["A: 在张紧力足够时可以避免", "B: 在传动功率较小时可以避免", "C: 在小带轮包角足够大时可以避免", "D: 不可避免"], 
    correct: "D",
    categories: ["传动"],
    knowledge: ["带传动"]
  },
  { 
    question: "一对正常齿制标准外啮合直齿圆柱齿轮，模数为2 mm,小齿轮齿数为21,大齿轮齿数为63,这对齿轮的标准中心距为", 
    options: ["A: 80mm", "B: 82mm", "C: 84mm", "D: 86mm"], 
    correct: "C",
    categories: ["齿轮"],
    knowledge: ["齿轮参数", "齿轮传动"]
  },
  { 
    question: "渐开线齿轮传动的瞬时传动比", 
    options: ["A: 变化", "B: 恒定", "C: 增大", "D: 减小"], 
    correct: "B",
    categories: ["齿轮"],
    knowledge: ["齿轮传动"]
  },
  { 
    question: "链传动能用于", 
    options: ["A: 交叉轴间的传动", "B: 交错轴间的传动", "C: 平行轴间的传动", "D: 可交错，又可平行轴间的传动"], 
    correct: "C",
    categories: ["传动"],
    knowledge: ["链传动"]
  },
  { 
    question: "在铰链四杆机构中，若最短杆和最长杆的长度之和大于其余两杆的长度之和，则机构有", 
    options: ["A: 一个曲柄", "B: 两个曲柄", "C: 一个摇杆", "D: 两个摇杆"], 
    correct: "D",
    categories: ["传动"],
    knowledge: ["机构分析"]
  },
  { 
    question: "常见的凸轮机构中，主动件凸轮通常作", 
    options: ["A: 等速转动或移动", "B: 变速转动或移动", "C: 变速转动", "D: 变速移动"], 
    correct: "A",
    categories: ["传动"],
    knowledge: ["凸轮机构"]
  },
  { 
    question: "轴与轴承相配合的部分称为", 
    options: ["A: 轴环", "B: 轴肩", "C: 轴颈", "D: 轴头"], 
    correct: "C",
    categories: ["轴承"],
    knowledge: ["轴承应用"]
  },
  { 
    question: "半圆键的工作面是键的", 
    options: ["A: 上表面", "B: 圆表面", "C: 两侧面", "D: 上表面和圆表面"], 
    correct: "C",
    categories: ["传动"],
    knowledge: ["键连接"]
  },
  { 
    question: "能承受径向载荷又能承受轴向载荷的滚动轴承是", 
    options: ["A: 推力球轴承", "B: 圆锥滚子轴承", "C: 圆柱滚子轴承", "D: 滚针轴承"], 
    correct: "B",
    categories: ["轴承"],
    knowledge: ["轴承类型"]
  },
  { 
    question: "在机械图样上标注线性尺寸时，尺寸线用细实线画出", 
    options: ["A: 也可以用其它图线代替", "B: 不能用其它图线代替", "C: 也可以与其它图线重合", "D: 也可以画在其它图线的延长线上"], 
    correct: "B",
    categories: ["制图"],
    knowledge: ["尺寸标注"]
  },
  { 
    question: "在六个基本视图中，右视图反映物体的", 
    options: ["A: 长度和高度", "B: 长度和宽度", "C: 宽度和高度", "D: 长度、宽度和高度"], 
    correct: "C",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "在剖视图中，同一零件在各视图上的剖面线", 
    options: ["A: 方向和间隔必须一致", "B: 方向必须一致，间隔可不一致", "C: 方向可不一致，间隔必须一致", "D: 方向和间隔可一致，也可不一致"], 
    correct: "A",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "根据齿轮的规定画法，绘制分度圆用", 
    options: ["A: 粗实线", "B: 细实线", "C: 虚线", "D: 细点画线"], 
    correct: "D",
    categories: ["制图"],
    knowledge: ["标准件画法"]
  },
  { 
    question: "Q235钢牌号中的235表示", 
    options: ["A: 碳的质量分数（含碳量）", "B: 钢的质量等级", "C: 钢的脱氧方法", "D: 钢的屈服强度"], 
    correct: "D",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  { 
    question: "牌号HT200表示的材料为", 
    options: ["A: 碳钢", "B: 合金钢", "C: 黄铜", "D: 铸铁"], 
    correct: "D",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  { 
    question: "联接螺纹首先要求自锁性好，而传动螺纹首先要求", 
    options: ["A: 传动效率高", "B: 平稳性好", "C: 强度高", "D: 自锁性也好"], 
    correct: "A",
    categories: ["螺纹"],
    knowledge: ["螺纹应用"]
  },
  { 
    question: "螺纹标记M12—6H中的M表示", 
    options: ["A: 管螺纹牙型代号", "B: 普通螺纹牙型代号", "C: 锯齿形螺纹牙型代号", "D: 梯形螺纹牙型代号"], 
    correct: "B",
    categories: ["螺纹"],
    knowledge: ["螺纹参数"]
  },
  { 
    question: "普通V带的横截面形状为", 
    options: ["A: 矩形", "B: 圆形", "C: 扁平形", "D: 等腰梯形"], 
    correct: "D",
    categories: ["传动"],
    knowledge: ["带传动"]
  },
  { 
    question: "有一标准直齿圆柱齿轮，模数为3mm，齿数为20,这个齿轮的分度圆直径为", 
    options: ["A: 50mm", "B: 55mm", "C: 60mm", "D: 65mm"], 
    correct: "C",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  { 
    question: "国家标准规定齿轮压力角在", 
    options: ["A: 齿顶圆上", "B: 齿根圆上", "C: 分度圆上", "D: 基圆上"], 
    correct: "C",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  { 
    question: "下列传动中，属于啮合类的传动是", 
    options: ["A: 普通V带传动", "B: 平带传动", "C: 圆带传动", "D: 链传动"], 
    correct: "D",
    categories: ["传动"],
    knowledge: ["链传动"]
  },
  { 
    question: "与机架连接且只能在某一角度范围内摆动的构件称为", 
    options: ["A: 曲柄", "B: 摇杆", "C: 连杆", "D: 机架"], 
    correct: "B",
    categories: ["传动"],
    knowledge: ["机构分析"]
  },
  { 
    question: "能准确地实现复杂运动规律的从动件端部结构是", 
    options: ["A: 尖顶", "B: 滚子", "C: 平底", "D: 曲面"], 
    correct: "A",
    categories: ["传动"],
    knowledge: ["凸轮机构"]
  },
  { 
    question: "轴上的键槽通常采用的加工方法是", 
    options: ["A: 插削", "B: 拉削", "C: 钻及铰", "D: 铣削"], 
    correct: "D",
    categories: ["传动"],
    knowledge: ["键连接"]
  },
  { 
    question: "滚动轴承内圈通常装在轴颈上，一般内圈与轴", 
    options: ["A: 一起转动", "B: 相对转动", "C: 反向转动", "D: 固定不动"], 
    correct: "A",
    categories: ["轴承"],
    knowledge: ["轴承应用"]
  },
  { 
    question: "主视图所在的投影面简称为", 
    options: ["A: 正面", "B: 反面", "C: 侧面", "D: 水平面"], 
    correct: "A",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "三视图的投影规律中，主视图与左视图应", 
    options: ["A: 长对正", "B: 高平齐", "C: 宽相等", "D: 高平齐、宽也相等"], 
    correct: "B",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "绘制半剖视图时，半个视图和半个剖视图的分界线应为", 
    options: ["A: 粗实线", "B: 细实线", "C: 虚线", "D: 点画线"], 
    correct: "A",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "无论外螺纹还是内螺纹，在剖视图或断面图中的剖面线应画到", 
    options: ["A: 粗实线", "B: 细实线", "C: 虚线", "D: 细点画线"], 
    correct: "A",
    categories: ["制图"],
    knowledge: ["标准件画法"]
  },
  { 
    question: "T10A是", 
    options: ["A: 结构钢", "B: 工具钢", "C: 轴承钢", "D: 特殊性能钢"], 
    correct: "B",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  { 
    question: "在下列钢号中，属于合金工具钢的是", 
    options: ["A: T12A", "B: 40Cr", "C: Q235", "D: CrWMn"], 
    correct: "D",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  { 
    question: "常用的联接螺纹是", 
    options: ["A: 单线左旋", "B: 单线右旋", "C: 双线左旋", "D: 双线右旋"], 
    correct: "B",
    categories: ["螺纹"],
    knowledge: ["螺纹应用"]
  },
  { 
    question: "下列螺纹中，牙型角为60°的是", 
    options: ["A: 管螺纹", "B: 锯齿形螺纹", "C: 梯形螺纹", "D: 普通螺纹"], 
    correct: "D",
    categories: ["螺纹"],
    knowledge: ["螺纹参数"]
  },
  { 
    question: "在一般的机械传动中，应用最广的带传动是", 
    options: ["A: 平带传动", "B: 普通V带传动", "C: 圆带传动", "D: 同步带传动"], 
    correct: "B",
    categories: ["传动"],
    knowledge: ["带传动"]
  },
  { 
    question: "某标准直齿圆柱齿轮的全齿高等于9mm,其模数为", 
    options: ["A: 2mm", "B: 2.5mm", "C: 3mm", "D: 4mm"], 
    correct: "D",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  { 
    question: "我国规定常用直齿圆柱齿轮的标准压力角为", 
    options: ["A: 24°", "B: 17°", "C: 20°", "D: 14°30'"], 
    correct: "C",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  { 
    question: "齿轮上形成渐开线的圆称为", 
    options: ["A: 齿顶圆", "B: 齿根圆", "C: 分度圆", "D: 基圆"], 
    correct: "D",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  { 
    question: "链传动是", 
    options: ["A: 具有中间刚性件的啮合传动", "B: 具有中间弹性件的啮合传动", "C: 具有中间挠性件的啮合传动", "D: 非啮合传动"], 
    correct: "C",
    categories: ["传动"],
    knowledge: ["链传动"]
  },
  { 
    question: "铰链四杆机构中各构件以", 
    options: ["A: 转动副相联接", "B: 移动副相联接", "C: 螺旋副相联接", "D: 高副相联接"], 
    correct: "A",
    categories: ["传动"],
    knowledge: ["机构分析"]
  },
  { 
    question: "在下列凸轮机构中，主动件凸轮作左右往复移动，从动件作上下往复移动的是", 
    options: ["A: 盘形凸轮", "B: 移动凸轮", "C: 圆柱凸轮", "D: 曲面凸轮"], 
    correct: "B",
    categories: ["传动"],
    knowledge: ["凸轮机构"]
  },
  { 
    question: "齿轮、带轮等传动件在轴上最为广泛使用的周向固定方法是", 
    options: ["A: 键联接", "B: 销联接", "C: 螺纹联接", "D: 过盈配合"], 
    correct: "A",
    categories: ["传动"],
    knowledge: ["键连接"]
  },
  { 
    question: "普通平键的工作面是键的", 
    options: ["A: 上表面", "B: 下表面", "C: 上表面和下表面", "D: 两侧面"], 
    correct: "D",
    categories: ["传动"],
    knowledge: ["键连接"]
  },
  { 
    question: "滚动轴承代号3208中，08是轴承的", 
    options: ["A: 内径代号", "B: 外径代号", "C: 宽（高）度代号", "D: 类型代号"], 
    correct: "A",
    categories: ["轴承"],
    knowledge: ["轴承代号"]
  },
  { 
    question: "标注角度尺寸时，尺寸数字一律写成", 
    options: ["A: 铅垂方向", "B: 倾斜方向", "C: 水平方向", "D: 任意方向"], 
    correct: "C",
    categories: ["制图"],
    knowledge: ["尺寸标注"]
  },
  { 
    question: "主视图反映机件的方位是", 
    options: ["A: 上、下和左、右", "B: 左、右和前、后", "C: 上、下和前、后", "D: 上、下、左、右和前、后"], 
    correct: "A",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "在机械图样中，向视图的视图配置可表述为", 
    options: ["A: 按基本视图的配置形式配置", "B: 必须按投影关系配置", "C: 可以自由配置", "D: 按第三角画法的配置规定配置"], 
    correct: "C",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "根据螺纹的规定画法，外螺纹的螺纹终止线用", 
    options: ["A: 粗实线", "B: 细实线", "C: 虚线", "D: 细点画线"], 
    correct: "A",
    categories: ["制图"],
    knowledge: ["标准件画法"]
  },
  { 
    question: "45钢是", 
    options: ["A: 结构钢", "B: 工具钢", "C: 轴承钢", "D: 特殊性能钢"], 
    correct: "A",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  { 
    question: "在下列钢号中，属于碳素结构钢的是", 
    options: ["A: TI0A", "B: 40Cr", "C: Q235", "D: CrWMn"], 
    correct: "C",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  { 
    question: "联接螺纹的牙型一般为", 
    options: ["A: 三角形", "B: 梯形", "C: 矩形", "D: 锯齿形"], 
    correct: "A",
    categories: ["螺纹"],
    knowledge: ["螺纹参数"]
  },
  { 
    question: "普通螺纹的牙型角为", 
    options: ["A: 3°", "B: 30°", "C: 55°", "D: 60°"], 
    correct: "D",
    categories: ["螺纹"],
    knowledge: ["螺纹参数"]
  },
  { 
    question: "在下列传动中，传动件在过载时能起到安全保护作用的是", 
    options: ["A: 齿轮传动", "B: 螺旋传动", "C: V带传动", "D: 链传动"], 
    correct: "C",
    categories: ["传动"],
    knowledge: ["带传动"]
  },
  { 
    question: "标准直齿圆柱齿轮的全齿高h为", 
    options: ["A: 1m", "B: 1.25m", "C: 2m", "D: 2.25m"], 
    correct: "D",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  { 
    question: "直齿圆柱外齿轮的齿顶圆、齿根圆、分度圆的大小关系为", 
    options: ["A: 齿顶圆>齿根圆>分度圆", "B: 齿顶圆>分度圆>齿根圆", "C: 齿根圆>齿顶圆>分度圆", "D: 分度圆>齿根圆>齿顶圆"], 
    correct: "B",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  { 
    question: "在齿轮机构中，用于两轴线平行的齿轮传动是", 
    options: ["A: 直齿圆柱齿轮传动", "B: 直齿圆锥齿轮传动", "C: 斜齿圆锥齿轮传动", "D: 蜗杆传动"], 
    correct: "A",
    categories: ["齿轮"],
    knowledge: ["齿轮传动"]
  },
  { 
    question: "链传动只限用于", 
    options: ["A: 交叉轴间的传动", "B: 相交轴间的传动", "C: 交错轴间的传动", "D: 平行轴间的传动"], 
    correct: "D",
    categories: ["传动"],
    knowledge: ["链传动"]
  },
  { 
    question: "在曲柄摇杆机构中，最短的构件是", 
    options: ["A: 曲柄", "B: 摇杆", "C: 连杆", "D: 机架"], 
    correct: "A",
    categories: ["传动"],
    knowledge: ["机构分析"]
  },
  { 
    question: "凸轮机构中凸轮与从动杆接触处的运动到属于", 
    options: ["A: 移动副", "B: 转动副", "C: 高副", "D: 齿轮副"], 
    correct: "C",
    categories: ["传动"],
    knowledge: ["凸轮机构"]
  },
  { 
    question: "轴环的用途是", 
    options: ["A: 作为轴加工时的定位面", "B: 提高轴的强度", "C: 提高轴的刚度", "D: 使轴上零件获得轴向定位"], 
    correct: "D",
    categories: ["传动"],
    knowledge: ["轴结构"]
  },
  { 
    question: "滚动轴承代号的基础是", 
    options: ["A: 前置代号", "B: 后置代号", "C: 前置代号和后置代号", "D: 基本代号"], 
    correct: "D",
    categories: ["轴承"],
    knowledge: ["轴承代号"]
  },
  { 
    question: "俯视图所在的投影面简称为", 
    options: ["A: 正面", "B: 反面", "C: 侧面", "D: 水平面"], 
    correct: "D",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "三视图的投影规律中，俯视图与左视图应", 
    options: ["A: 长对正", "B: 高平齐", "C: 宽相等", "D: 宽相等、高也平齐"], 
    correct: "C",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "在机械图样中，绘制重合断面的轮廓线用", 
    options: ["A: 粗实线", "B: 细实线", "C: 虚线", "D: 细点画线"], 
    correct: "B",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "根据螺纹的规定画法，绘制外螺纹的螺纹小径用", 
    options: ["A: 粗实线", "B: 细实线", "C: 虚线", "D: 细点画线"], 
    correct: "B",
    categories: ["制图"],
    knowledge: ["标准件画法"]
  },
  { 
    question: "Q235钢是", 
    options: ["A: 工具钢", "B: 结构钢", "C: 轴承钢", "D: 特殊性能钢"], 
    correct: "B",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  { 
    question: "HT150表示的材料为", 
    options: ["A: 碳钢", "B: 合金钢", "C: 铸铁", "D: 黄铜"], 
    correct: "C",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  { 
    question: "传动螺纹首先要求传动效率高，而联接螺纹首先要求", 
    options: ["A: 自锁性好", "B: 平稳性好", "C: 强度高", "D: 效率也高"], 
    correct: "A",
    categories: ["螺纹"],
    knowledge: ["螺纹应用"]
  },
  { 
    question: "普通螺纹的公称直径是", 
    options: ["A: 螺纹小径", "B: 螺纹中径", "C: 螺纹大径", "D: 平均直径"], 
    correct: "C",
    categories: ["螺纹"],
    knowledge: ["螺纹参数"]
  },
  { 
    question: "V带传动传递运动和动力是依靠", 
    options: ["A: 主轴的动力", "B: 带和带轮之间的摩擦力", "C: 主动带轮的转矩", "D: 带在轴上的压力"], 
    correct: "B",
    categories: ["传动"],
    knowledge: ["带传动"]
  },
  { 
    question: "有一标准外啮合直齿圆柱齿轮，模数为2mm,分度圆直径为50mm,齿数为", 
    options: ["A: 20", "B: 25", "C: 30", "D: 50"], 
    correct: "B",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  { 
    question: "在渐开线标准直齿圆柱齿轮上，齿厚与齿槽宽相等的圆称为", 
    options: ["A: 齿顶圆", "B: 齿根圆", "C: 分度圆", "D: 基圆"], 
    correct: "C",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  { 
    question: "对于齿数相同的齿轮，模数越大，齿轮的承载能力", 
    options: ["A: 越大", "B: 越小", "C: 有时候大，有时候小", "D: 与模数无关"], 
    correct: "A",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  { 
    question: "链传动与带传动相比，其主要优点是", 
    options: ["A: 工作平稳，且无噪声", "B: 制造费用低", "C: 平均传动比准确", "D: 使用寿命长"], 
    correct: "C",
    categories: ["传动"],
    knowledge: ["链传动"]
  },
  { 
    question: "与机架连接且能做整周旋转运动的构件称为", 
    options: ["A: 曲柄", "B: 摇杆", "C: 连杆", "D: 机架"], 
    correct: "A",
    categories: ["传动"],
    knowledge: ["机构分析"]
  },
  { 
    question: "凸轮的最基本型式是", 
    options: ["A: 盘形凸轮", "B: 移动凸轮", "C: 槽形圆柱凸轮", "D: 端面圆柱凸轮"], 
    correct: "A",
    categories: ["传动"],
    knowledge: ["凸轮机构"]
  },
  { 
    question: "轴与传动零件（轮毂）相配合的部分称为", 
    options: ["A: 轴环", "B: 轴肩", "C: 轴颈", "D: 轴头"], 
    correct: "D",
    categories: ["传动"],
    knowledge: ["轴结构"]
  },
  { 
    question: "在下列键联接中，键槽对轴的强度削弱最大的是", 
    options: ["A: 钩头楔键", "B: 半圆键", "C: 普通平键", "D: 导向平键"], 
    correct: "B",
    categories: ["传动"],
    knowledge: ["键连接"]
  },
  { 
    question: "深沟球轴承的类型代号是", 
    options: ["A: 3", "B: 4", "C: 5", "D: 6"], 
    correct: "D",
    categories: ["轴承"],
    knowledge: ["轴承类型"]
  },
  { 
    question: "左视图所在的投影面简称为", 
    options: ["A: 正面", "B: 反面", "C: 侧面", "D: 水平面"], 
    correct: "C",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "三视图的投影规律中，主视图与俯视图应", 
    options: ["A: 长对正", "B: 高平齐", "C: 宽相等", "D: 长对正、宽也相等"], 
    correct: "A",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "在机械图样中，绘制移出断面图的轮廓线用", 
    options: ["A: 粗实线", "B: 细实线", "C: 虚线", "D: 细点画线"], 
    correct: "B",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "据螺纹的规定画法，绘制外螺纹的螺纹大径用", 
    options: ["A: 粗实线", "B: 细实线", "C: 虚线", "D: 细点画线"], 
    correct: "A",
    categories: ["制图"],
    knowledge: ["标准件画法"]
  },
  { 
    question: "在下列钢号中，属于合金结构钢的是", 
    options: ["A: T10A", "B: 40Cr", "C: Q235", "D: CrWMn"], 
    correct: "B",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  { 
    question: "HT200表示的材料为", 
    options: ["A: 黄铜", "B: 碳钢", "C: 合金钢", "D: 铸铁"], 
    correct: "D",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  { 
    question: "在下列的螺纹中，自锁性能最好的是", 
    options: ["A: 矩形螺纹", "B: 三角形螺纹", "C: 锯齿形螺纹", "D: 梯形螺纹"], 
    correct: "B",
    categories: ["螺纹"],
    knowledge: ["螺纹参数"]
  },
  { 
    question: "普通螺纹的牙型角为", 
    options: ["A: 0°", "B: 30°", "C: 55°", "D: 60°"], 
    correct: "D",
    categories: ["螺纹"],
    knowledge: ["螺纹参数"]
  },
  { 
    question: "按国家标准，普通V带型号有", 
    options: ["A: 六种", "B: 七种", "C: 八种", "D: 九种"], 
    correct: "B",
    categories: ["传动"],
    knowledge: ["带传动"]
  },
  { 
    question: "有一标准直齿圆柱齿轮，模数为2mm,齿数为21,这个齿轮的分度圆直径为", 
    options: ["A: 38mm", "B: 40mm", "C: 42mm", "D: 45mm"], 
    correct: "C",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  { 
    question: "齿轮上形成渐开线的圆称为", 
    options: ["A: 齿顶圆", "B: 齿根圆", "C: 分度圆", "D: 基圆"], 
    correct: "D",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  { 
    question: "对于齿数相同的齿轮，模数越大，齿轮的承载能力", 
    options: ["A: 越小", "B: 越大", "C: 有时候大，有时候小", "D: 与模数无关"], 
    correct: "B",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  { 
    question: "链传动是", 
    options: ["A: 具有中间刚性件的啮合传动", "B: 具有中间弹性件的啮合传动", "C: 具有中间挠性件的啮合传动", "D: 不存在啮合传动"], 
    correct: "C",
    categories: ["传动"],
    knowledge: ["链传动"]
  },
  { 
    question: "铰链四杆机构中，与机架相连且只能在某一角度内摆动的构件称为", 
    options: ["A: 摇杆", "B: 曲柄", "C: 连杆", "D: 机架"], 
    correct: "A",
    categories: ["传动"],
    knowledge: ["机构分析"]
  },
  { 
    question: "常见的凸轮机构中，主动件凸轮通常作", 
    options: ["A: 变速移动", "B: 变速转动", "C: 变速转动或移动", "D: 等速转动或移动"], 
    correct: "D",
    categories: ["传动"],
    knowledge: ["凸轮机构"]
  },
  { 
    question: "轴与轴承相配合的轴段称为", 
    options: ["A: 轴环", "B: 轴肩", "C: 轴颈", "D: 轴头"], 
    correct: "C",
    categories: ["轴承"],
    knowledge: ["轴承应用"]
  },
  { 
    question: "滚动轴承代号3210中，10是轴承的", 
    options: ["A: 内径代号", "B: 外径代号", "C: 宽（高）度代号", "D: 类型代号"], 
    correct: "A",
    categories: ["轴承"],
    knowledge: ["轴承代号"]
  },
  { 
    question: "尺寸标注中，符号Φ是表示", 
    options: ["A: 直径", "B: 半径", "C: 球直径", "D: 球半径"], 
    correct: "A",
    categories: ["制图"],
    knowledge: ["尺寸标注"]
  },
  { 
    question: "主视图反映零件的", 
    options: ["A: 长度和高度", "B: 长度和宽度", "C: 宽度和高度", "D: 长度"], 
    correct: "A",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "在机械图样中，绘制对称中心线、轴线等一般用", 
    options: ["A: 粗实线", "B: 细实线", "C: 虚线", "D: 细点画线"], 
    correct: "D",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "在齿轮的端面视图中绘制分度圆用", 
    options: ["A: 粗实线", "B: 细实线", "C: 虚线", "D: 细点画线"], 
    correct: "D",
    categories: ["制图"],
    knowledge: ["标准件画法"]
  },
  { 
    question: "一般碳素工具钢为", 
    options: ["A: 高碳钢", "B: 中碳钢", "C: 低碳钢", "D: 中碳钢或低碳钢"], 
    correct: "A",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  { 
    question: "联接螺纹首先要求自锁性好，而传动螺纹首先要求", 
    options: ["A: 强度高", "B: 平稳性好", "C: 效率高", "D: 自锁性也好"], 
    correct: "C",
    categories: ["螺纹"],
    knowledge: ["螺纹应用"]
  },
  { 
    question: "非螺纹密封管螺纹的牙型角为", 
    options: ["A: 0°", "B: 30°", "C: 55°", "D: 60°"], 
    correct: "C",
    categories: ["螺纹"],
    knowledge: ["螺纹参数"]
  },
  { 
    question: "普通V带的横截面形状为", 
    options: ["A: 矩形", "B: 等腰形", "C: 圆形", "D: 扁平形"], 
    correct: "B",
    categories: ["传动"],
    knowledge: ["带传动"]
  },
  { 
    question: "标准正常齿制直齿圆柱齿轮的全齿高等于", 
    options: ["A: 2.25m", "B: 2m", "C: 1.25m", "D: m"], 
    correct: "A",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  { 
    question: "我国规定常用直齿圆柱齿轮的标准压力角为", 
    options: ["A: 24°", "B: 17°", "C: 20°", "D: 14°30'"], 
    correct: "C",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  { 
    question: "下列齿轮传动中，属于交错轴齿轮传动的是", 
    options: ["A: 直齿圆柱齿轮传动", "B: 蜗杆传动", "C: 直齿圆锥齿轮传动", "D: 齿轮齿条传动"], 
    correct: "B",
    categories: ["齿轮"],
    knowledge: ["齿轮传动"]
  },
  { 
    question: "下列传动中，属于啮合类传动的是", 
    options: ["A: 链传动", "B: 平带传动", "C: 圆带传动", "D: 普通V带传动"], 
    correct: "A",
    categories: ["传动"],
    knowledge: ["链传动"]
  },
  { 
    question: "双摇杆机构具有", 
    options: ["A: 一个曲柄", "B: 一个摇杆", "C: 两个曲柄", "D: 两个摇杆"], 
    correct: "D",
    categories: ["传动"],
    knowledge: ["机构分析"]
  },
  { 
    question: "凸轮机构从动件的端部结构最容易磨损的是", 
    options: ["A: 球面", "B: 尖顶", "C: 平底", "D: 滚子"], 
    correct: "B",
    categories: ["传动"],
    knowledge: ["凸轮机构"]
  },
  { 
    question: "直轴和曲轴的区别在于", 
    options: ["A: 工作状态不同", "B: 轴的直径不同", "C: 轴线形状不同", "D: 承载情况不同"], 
    correct: "C",
    categories: ["传动"],
    knowledge: ["轴结构"]
  },
  { 
    question: "在下列键联接中，键槽对轴的强度削弱最大的是", 
    options: ["A: 导向平键", "B: 钩头楔键", "C: 半圆键", "D: 普通平键"], 
    correct: "C",
    categories: ["传动"],
    knowledge: ["键连接"]
  },
  { 
    question: "滚动轴承内圈通常装在轴颈上，一般内圈与轴", 
    options: ["A: 固定不动", "B: 反向转动", "C: 相对转动", "D: 一起转动"], 
    correct: "D",
    categories: ["轴承"],
    knowledge: ["轴承应用"]
  },
  { 
    question: "绘制机械图样主要采用", 
    options: ["A: 中心投影法", "B: 正投影法", "C: 斜投影法", "D: 中心投影法和斜投影法都可"], 
    correct: "B",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "在六个基本视图中，主视图反映物体的", 
    options: ["A: 长度、宽度和高度", "B: 宽度和高度", "C: 长度和宽度", "D: 长度和高度"], 
    correct: "D",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "在剖视图中绘制金属材料的剖面线用适当角度的", 
    options: ["A: 细实线", "B: 粗实线", "C: 细点画线", "D: 虚线"], 
    correct: "A",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "根据齿轮的规定画法，在表示齿轮端面的视图中绘制分度圆用", 
    options: ["A: 粗实线", "B: 细实线", "C: 虚线", "D: 细点画线"], 
    correct: "D",
    categories: ["制图"],
    knowledge: ["标准件画法"]
  },
  { 
    question: "一般低合金工具钢为", 
    options: ["A: 高碳钢", "B: 中碳钢", "C: 低碳钢", "D: 中碳钢或低碳钢"], 
    correct: "D",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  { 
    question: "传动螺纹首先要求效率高，而联接螺纹首先要求", 
    options: ["A: 强度高", "B: 平稳性好", "C: 自锁性好", "D: 效率也高"], 
    correct: "C",
    categories: ["螺纹"],
    knowledge: ["螺纹应用"]
  },
  { 
    question: "牙型角为60°的螺纹是", 
    options: ["A: 梯形螺纹", "B: 普通螺纹", "C: 锯齿形螺纹", "D: 管螺纹"], 
    correct: "B",
    categories: ["螺纹"],
    knowledge: ["螺纹参数"]
  },
  { 
    question: "V带传动中，V带的工作面是", 
    options: ["A: 单侧面", "B: 两侧面", "C: 内圆周面", "D: 外圆周面"], 
    correct: "B",
    categories: ["传动"],
    knowledge: ["带传动"]
  },
  { 
    question: "某正常齿制标准外啮合直齿圆柱齿轮的全齿高等于9mm,其模数等于", 
    options: ["A: 4mm", "B: 3mm", "C: 2.5mm", "D: 2mm"], 
    correct: "A",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  { 
    question: "直齿圆锥齿轮传动属于", 
    options: ["A: 交错轴齿轮传动", "B: 平行轴齿轮传动", "C: 相交轴齿轮传动", "D: 任意位置轴齿轮传动"], 
    correct: "C",
    categories: ["齿轮"],
    knowledge: ["齿轮传动"]
  },
  { 
    question: "在曲柄摇杆机构中，曲柄的长度", 
    options: ["A: 最短", "B: 最长", "C: 大于摇杆长度", "D: 大于连杆长度"], 
    correct: "A",
    categories: ["传动"],
    knowledge: ["机构分析"]
  },
  { 
    question: "齿轮、带轮等传动件在轴上作周向固定最广泛使用的方法是", 
    options: ["A: 过盈配合", "B: 螺纹联接", "C: 键联接", "D: 销联接"], 
    correct: "C",
    categories: ["传动"],
    knowledge: ["键连接"]
  },
  { 
    question: "在选用滚动轴承时，应考虑轴承的极限转速，高速时应优先选用", 
    options: ["A: 圆锥滚子轴承", "B: 推力球轴承", "C: 圆柱滚子轴承", "D: 球轴承"], 
    correct: "D",
    categories: ["轴承"],
    knowledge: ["轴承应用"]
  },
  { 
    question: "主视图所在的投影面又称为", 
    options: ["A: 正面", "B: 侧面", "C: 水平面", "D: 垂直面"], 
    correct: "A",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "绘制半剖视图时，半个视图和半个剖视图的分界线应为", 
    options: ["A: 粗实线", "B: 细实线", "C: 细点画线", "D: 虚线"], 
    correct: "C",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  { 
    question: "在下列钢号中，属于碳素结构钢的是", 
    options: ["A: 45", "B: T7A", "C: 9SiCr", "D: 40Cr"], 
    correct: "A",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  { 
    question: "适合用于制造手锤的材料是", 
    options: ["A: 结构钢", "B: 工具钢", "C: 特殊性能钢", "D: 铸铁"], 
    correct: "B",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  { 
    question: "一般管螺纹的牙型角为", 
    options: ["A: 60°", "B: 55°", "C: 30°", "D: 0°"], 
    correct: "B",
    categories: ["螺纹"],
    knowledge: ["螺纹参数"]
  },
  { 
    question: "下列带传动中，不属于摩擦型带传动的是", 
    options: ["A: 同步带传动", "B: 圆带传动", "C: V带传动", "D: 平带传动"], 
    correct: "A",
    categories: ["传动"],
    knowledge: ["带传动"]
  },
  { 
    question: "有一对外啮合标准直齿圆柱齿轮，模数为2mm，大齿轮齿数为60，小齿轮齿数为40, 这对齿轮的中心距为", 
    options: ["A: 130mm", "B: 120mm", "C: 100mm", "D: 80mm"], 
    correct: "C",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  { 
    question: "在AutoCAD中取消已执行的命令，可以使用命令", 
    options: ["A: Trim", "B: Save", "C: Open", "D: Undo"], 
    correct: "D",
    categories: ["制图"],
    knowledge: ["CAD操作"]
  },






   {
    question: "QT500-7表示的材料是",
    options: ["A: 球墨铸铁", "B: 灰铸铁", "C: 可锻铸铁", "D: 白口铸铁"],
    correct: "A",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  {
    question: "螺纹标记G1/2中的G表示",
    options: ["A: 普通螺纹", "B: 管螺纹", "C: 梯形螺纹", "D: 锯齿形螺纹"],
    correct: "B",
    categories: ["螺纹"],
    knowledge: ["螺纹参数"]
  },
  {
    question: "渐开线齿轮的齿廓形状由什么决定？",
    options: ["A: 模数", "B: 基圆", "C: 分度圆", "D: 齿顶圆"],
    correct: "B",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  {
    question: "机械制图中，尺寸线必须用",
    options: ["A: 粗实线", "B: 细实线", "C: 虚线", "D: 点画线"],
    correct: "B",
    categories: ["制图"],
    knowledge: ["尺寸标注"]
  },
  {
    question: "下列材料中，属于合金工具钢的是",
    options: ["A: 45钢", "B: T8A", "C: 9SiCr", "D: Q235"],
    correct: "C",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  {
    question: "普通平键的截面形状是",
    options: ["A: 矩形", "B: 半圆形", "C: 梯形", "D: 三角形"],
    correct: "A",
    categories: ["传动"],
    knowledge: ["键连接"]
  },
  {
    question: "蜗杆传动常用于实现",
    options: ["A: 平行轴传动", "B: 相交轴传动", "C: 交错轴传动", "D: 任意轴传动"],
    correct: "C",
    categories: ["传动"],
    knowledge: ["齿轮传动"]
  },
  {
    question: "剖视图中，剖切面后的可见轮廓线应",
    options: ["A: 省略不画", "B: 用虚线表示", "C: 用粗实线画出", "D: 用细点画线表示"],
    correct: "C",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  {
    question: "下列传动中，传动比最准确的是",
    options: ["A: 带传动", "B: 链传动", "C: 齿轮传动", "D: 摩擦轮传动"],
    correct: "C",
    categories: ["传动"],
    knowledge: ["齿轮传动"]
  },
  {
    question: "深沟球轴承的类型代号是",
    options: ["A: 3", "B: 5", "C: 6", "D: 7"],
    correct: "C",
    categories: ["轴承"],
    knowledge: ["轴承类型"]
  },
  {
    question: "绘制齿轮时，齿顶圆应使用",
    options: ["A: 粗实线", "B: 细实线", "C: 虚线", "D: 点画线"],
    correct: "A",
    categories: ["制图"],
    knowledge: ["标准件画法"]
  },
  {
    question: "牌号ZG270-500表示的材料为",
    options: ["A: 铸钢", "B: 铸铁", "C: 黄铜", "D: 铝合金"],
    correct: "A",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  {
    question: "梯形螺纹的牙型角为",
    options: ["A: 30°", "B: 55°", "C: 60°", "D: 0°"],
    correct: "A",
    categories: ["螺纹"],
    knowledge: ["螺纹参数"]
  },
  {
    question: "标准直齿圆柱齿轮的齿顶高系数一般为",
    options: ["A: 0.25", "B: 1", "C: 1.25", "D: 2"],
    correct: "B",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  {
    question: "标注圆的直径时，尺寸数字前应加符号",
    options: ["A: Φ", "B: R", "C: SR", "D: SΦ"],
    correct: "A",
    categories: ["制图"],
    knowledge: ["尺寸标注"]
  },
  {
    question: "下列钢中，属于碳素工具钢的是",
    options: ["A: 45", "B: T10A", "C: 20Cr", "D: Q235"],
    correct: "B",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  {
    question: "半圆键的主要缺点是",
    options: ["A: 承载能力低", "B: 对中性差", "C: 加工困难", "D: 不能轴向固定"],
    correct: "A",
    categories: ["传动"],
    knowledge: ["键连接"]
  },
  {
    question: "绘制局部放大图时，放大部位用",
    options: ["A: 粗实线圈出", "B: 细实线圈出", "C: 虚线标出", "D: 点画线标出"],
    correct: "B",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  {
    question: "下列材料中，属于高碳钢的是",
    options: ["A: 20", "B: 45", "C: T8", "D: Q235"],
    correct: "C",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  {
    question: "渐开线齿轮的啮合线是",
    options: ["A: 直线", "B: 曲线", "C: 圆弧", "D: 渐开线"],
    correct: "A",
    categories: ["齿轮"],
    knowledge: ["齿轮传动"]
  },
  {
    question: "绘制断裂边界线时，应使用",
    options: ["A: 波浪线", "B: 双折线", "C: 细实线", "D: 点画线"],
    correct: "A",
    categories: ["制图"],
    knowledge: ["视图表达"]
  },
  {
    question: "牌号KTH300-06表示的材料为",
    options: ["A: 可锻铸铁", "B: 灰铸铁", "C: 球墨铸铁", "D: 蠕墨铸铁"],
    correct: "A",
    categories: ["材料"],
    knowledge: ["金属材料"]
  },
  {
    question: "推力球轴承的类型代号是",
    options: ["A: 5", "B: 6", "C: 7", "D: 8"],
    correct: "A",
    categories: ["轴承"],
    knowledge: ["轴承类型"]
  },
  {
    question: "标注角度尺寸时，尺寸线应画成",
    options: ["A: 圆弧", "B: 直线", "C: 折线", "D: 任意形状"],
    correct: "A",
    categories: ["制图"],
    knowledge: ["尺寸标注"]
  },
  {
    question: "普通螺纹的公称直径是指",
    options: ["A: 大径", "B: 小径", "C: 中径", "D: 平均直径"],
    correct: "A",
    categories: ["螺纹"],
    knowledge: ["螺纹参数"]
  },
  {
    question: "下列螺纹中，牙型角为55°的是",
    options: ["A: 普通螺纹", "B: 管螺纹", "C: 梯形螺纹", "D: 锯齿形螺纹"],
    correct: "B",
    categories: ["螺纹"],
    knowledge: ["螺纹参数"]
  },
  {
    question: "螺纹标记M20×2-6g中，2表示",
    options: ["A: 公称直径", "B: 导程", "C: 螺距", "D: 旋合长度"],
    correct: "C",
    categories: ["螺纹"],
    knowledge: ["螺纹标记"]
  },
  {
    question: "螺纹紧固件中，弹簧垫圈的主要作用是",
    options: ["A: 增大接触面积", "B: 防松", "C: 密封", "D: 调整高度"],
    correct: "B",
    categories: ["螺纹"],
    knowledge: ["螺纹紧固件"]
  },
  {
    question: "联轴器与离合器的主要区别是",
    options: ["A: 传递扭矩大小", "B: 能否在运转中接合", "C: 安装精度要求", "D: 使用材料"],
    correct: "B",
    categories: ["传动"],
    knowledge: ["轴系零件"]
  },
  {
    question: "制动器的基本功能是",
    options: ["A: 传递动力", "B: 储存能量", "C: 减速或停止运动", "D: 改变运动方向"],
    correct: "C",
    categories: ["传动"],
    knowledge: ["轴系零件"]
  },
 {
    question: "普通螺纹的牙型角为多少度？",
    options: ["A: 30°", "B: 55°", "C: 60°", "D: 90°"],
    correct: "C",
    categories: ["螺纹"],
    knowledge: ["螺纹参数"]
  },
  {
    question: "下列哪种螺纹适用于密封管道连接？",
    options: ["A: 普通螺纹", "B: 梯形螺纹", "C: 管螺纹", "D: 矩形螺纹"],
    correct: "C",
    categories: ["螺纹"],
    knowledge: ["螺纹应用"]
  },
  {
    question: "螺纹旋向判定方法正确的是？",
    options: ["A: 顺时针旋入为右旋", "B: 逆时针旋入为左旋", "C: 轴线竖直时右高左低为右旋", "D: 以上均正确"],
    correct: "D",
    categories: ["螺纹"],
    knowledge: ["螺纹传动形式"]
  },
  {
    question: "V带传动的传动比不准确主要是因为？",
    options: ["A: 弹性滑动", "B: 打滑", "C: 带轮直径误差", "D: 安装误差"],
    correct: "A",
    categories: ["传动"],
    knowledge: ["带传动"]
  },
  {
    question: "摩擦轮传动的最大优点是？",
    options: ["A: 传动比精确", "B: 过载保护", "C: 结构简单", "D: 无需润滑"],
    correct: "B",
    categories: ["传动"],
    knowledge: ["摩擦轮传动"]
  },
  {
    question: "标准直齿圆柱齿轮的分度圆直径计算公式为？",
    options: ["A: d = mz", "B: d = m(z+2)", "C: d = m(z-2.5)", "D: d = πm"],
    correct: "A",
    categories: ["齿轮"],
    knowledge: ["齿轮参数"]
  },
  {
    question: "铰链四杆机构中，若最短杆与最长杆长度之和大于其余两杆之和，则该机构为？",
    options: ["A: 双曲柄机构", "B: 曲柄摇杆机构", "C: 双摇杆机构", "D: 曲柄滑块机构"],
    correct: "C",
    categories: ["传动"],
    knowledge: ["机构分析"]
  },
  {
    question: "联轴器的主要功能是？",
    options: ["A: 传递扭矩", "B: 过载保护", "C: 改变转速", "D: 调整相位"],
    correct: "A",
    categories: ["传动"],
    knowledge: ["轴系零件"]
  },
  {
    question: "制动器在机械系统中的主要作用是？",
    options: ["A: 储存能量", "B: 传递动力", "C: 减速或停止运动", "D: 改变运动方向"],
    correct: "C",
    categories: ["传动"],
    knowledge: ["轴系零件"]
  },
  {
    question: "带传动发生打滑时",
    options: ["A: 从动轮转速急剧下降", "B: 传动比保持不变", "C: 起过载保护作用", "D: 带磨损加剧"],
    correct: "C",
    categories: ["传动"],
    knowledge: ["带传动"]
  },
      { 
        question: "优质碳素结构钢的牌号用两位数字表示，45钢表示平均含碳量为", 
        options: ["A: 0.045%", "B: 0.45%", "C: 4.5%", "D: 45%"], 
        correct: "B",
        categories: ["材料"],
        knowledge: ["金属材料"]
    },
    { 
        question: "HT200中的HT表示", 
        options: ["A: 球墨铸铁", "B: 灰口铸铁", "C: 可锻铸铁", "D: 蠕墨铸铁"], 
        correct: "B",
        categories: ["材料"],
        knowledge: ["铸造材料"]
    }
];
