import { setAddon, configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

const { name, homepage: url } = require('../package.json')

function loadStories () {
  require('../stories')
}

setAddon(JSXAddon)

setOptions({
  name,
  url,
  goFullScreen: false,
  showStoriesPanel: false,
  showAddonPanel: false,
  showSearchBox: false,
  addonPanelInRight: false,
  sortStoriesByKind: false
})

configure(loadStories, module)
