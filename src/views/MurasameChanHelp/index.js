import React, { PureComponent } from 'react'
import { Helmet } from 'react-helmet'

import { PostContent } from 'containers'

const HELP = 
`## 小丛雨现在可以……

| Command                                     | Description             | Example                |
| :------------------------------------------ | :---------------------- | :--------------------- |
| \`/help\`, \`/帮助\`                            | 呃啊                    |                        |
| \`/ping\`                                     | 歪？是小丛雨吗？        |                        |
| \`/roll <number=100>\`                        | 在 \\[0, number\\] 里摇点 | \`/roll 20\`             |
| \`/roll [arg1] [arg2] <...>\`                 | 专治选择困难            | \`/roll 芳乃 丛雨 茉子\` |
| \`/[...是不是/要不要...]\`, \`/[...有没有...]\` | 回答型人工智障          | \`/芳乃酱可不可爱？\`    |
| \`/sleep\`, \`/睡觉\`                           | 该睡觉啦zzz             |                        |
| \`/contact\`, \`/feedback\`, \`/反馈\` + \`[反馈内容]\` | 有什么想对我的主人说的呢？ | \`/contact 丛雨酱你不够可爱\` |

前往 [Github](https://github.com/purple4pur/murasame-chan#%E5%B0%8F%E4%B8%9B%E9%9B%A8%E7%8E%B0%E5%9C%A8%E5%8F%AF%E4%BB%A5) 查看最新版本`

export default class MurasameChanHelp extends PureComponent {
  render() {
    return (
      <>
        <Helmet>
          <title>丛雨酱帮助菜单</title>
        </Helmet>
        <PostContent content={HELP} />
      </>
    )
  }
}
