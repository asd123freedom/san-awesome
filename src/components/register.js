/**
 * @file icon register
 * @author leuisken <leuisken@foxmail.com>
 */

let icons = {}

export function register (data) {
  for (let name in data) {
    let icon = data[name]

    if (!icon.paths) {
      icon.paths = []
    }
    if (icon.d) {
      icon.paths.push({ d: icon.d })
    }

    if (!icon.polygons) {
      icon.polygons = []
    }
    if (icon.points) {
      icon.polygons.push({ points: icon.points })
    }

    icons[name] = icon
  }
}

export function get (name) {
  if (name) {
    return icons[name]
  }
  return icons
}
