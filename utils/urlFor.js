import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

export default function(source) {
    return imageUrlBuilder(client).image(source)
}