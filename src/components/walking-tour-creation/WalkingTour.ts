import Document from '../../documents/Document';

/**
 * A valid entry into the walking tour must have both an article and directions from the last point
 * specified (starting point, some point in the middle of the tour, or the end of the tour)
 */
export interface WalkingTourEntry {
  directionsFromLastPoint: string,
  article: Document
}

/**
 * A walking tour is a list of documents with directions on how to get from one point to another all
 * the way from the beginning to the end of the walking tour. This class holds all data and behavior
 * for a walking tour.
 */
class WalkingTour {

}

export default WalkingTour;