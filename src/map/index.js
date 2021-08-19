import TileLayer  from "ol/layer/Tile"
import View from "ol/View"
import {OSM, Vector as VectorSource} from 'ol/source'
import Map from 'ol/Map'
import VectorLayer from "ol/layer/Vector"

class AMap{
  constructor(options) {
    this.options = options
    this.map = null
    this.view = null
    this.baseLayer = null
    this.vectorLayer = null
    this.init()
  }

  init () {
    const viewOptions = this.options.view
    const view = new View({
      projection: viewOptions?.projection || 'EPSG:4326',
      center: viewOptions?.center || [0, 0],
      zoom: viewOptions?.zoom || 12
    })

    const baseLayer = new TileLayer({
      source: new OSM()
    })

    const vectorLayer = new VectorLayer({
      source: new VectorSource()
    })

    const map = new Map({
      target: this.options.target,
      view: view,
      layers: [baseLayer]
    })

    this.baseLayer = baseLayer
    this.vectorLayer = vectorLayer
    this.view = view
    this.map = map
  }
}

export default AMap
