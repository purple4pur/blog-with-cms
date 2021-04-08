import React, { PureComponent } from 'react'
import { Helmet } from 'react-helmet'

import { PostContent } from 'containers'

const HELP = 
`## 小从雨现在可以……

| Command                                     | Description             | Example                |
| :------------------------------------------ | :---------------------- | :--------------------- |
| \`/help\`, \`/帮助\`                            | 呃啊                    |                        |
| \`/ping\`                                     | 歪？是小从雨吗？        |                        |
| \`/roll <number=100>\`                        | 在 \[0, number\] 里摇点 | \`/roll 20\`             |
| \`/roll [arg1] [arg2] <...>\`                 | 专治选择困难            | \`/roll 芳乃 从雨 茉子\` |
| \`/[...是不是/要不要...]\`, \`/[...有没有...]\` | 回答型人工智障          | \`/芳乃酱可不可爱？\`    |
| \`/sleep\`, \`/睡觉\`                           | 该睡觉啦zzz             |                        |

前往 [Github](https://github.com/purple4pur/murasame-chan) 查看最新版本`

export default class MurasameChanHelp extends PureComponent {
  render() {
    return (
      <>
        <Helmet>
          <title>从雨酱帮助菜单</title>
        </Helmet>
        <PostContent content={HELP} />
      </>
    )
  }
}
