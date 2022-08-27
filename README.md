# 🥞 Wukong UIkit

[![Version](https://img.shields.io/npm/v/@wukongfinance/uikit)](https://www.npmjs.com/package/@wukongfinance/uikit) [![Size](https://img.shields.io/bundlephobia/min/@wukongfinance/uikit)](https://www.npmjs.com/package/@wukongfinance/uikit)

Wukong UIkit is a set of React components and hooks used to build pages on Wukong's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @wukongfinance/uikit`

## Setup

### Theme

Before using Wukong UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@wukongfinance/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@wukongfinance/uikit'
...
<ResetCSS />
```
