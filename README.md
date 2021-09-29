# Hora Swap UIkit

**This repository is not used anymore. See the [https://github.com/HoraSwap/HoraSwap-toolkit](HoraSwap toolkit) instead**

[![Version](https://img.shields.io/npm/v/horaswap-libs-uikit)](https://www.npmjs.com/package/horaswap-libs-uikit) [![Size](https://img.shields.io/bundlephobia/min/horaswap-libs-uikit)](https://www.npmjs.com/package/horaswap-libs-uikit)

HoraSwap UIkit is a set of React components and hooks used to build pages on HoraSwap's apps. It also contains a theme file for dark and light mode.

## Install 

`yarn add horaswap-libs-uikit`

## Setup

### Theme

Before using HoraSwap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from 'horaswap-libs-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from 'horaswap-libs-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
