import mapboxgl from "mapbox-gl";
import React from 'react';
import DocumentCard from "../components/DocumentCard";
import MapboxMap from "../components/MapboxMap";
import { useDrag, DragSourceMonitor } from "react-dnd";

export enum DocumentType {
  WALKING_TOUR, 
  ARCHIVE_WITH_LOCATION, 
  ARCHIVE_WITH_REGION,
}

export interface Coords {
  lat: number;
  lng: number;
}

/**
 * A DraggableCardType is one of
 * - **WALKING_TOUR_ENTRY** an entry used in a walking tour view (i.e. walking tour creator)
 * - **ARTICLE** a single article card, typically displayed in a list of articles
 */
export enum DraggableCardType {
  WALKING_TOUR_ENTRY = "WALKING_TOUR_ENTRY",
  ARTICLE = "ARTICLE"
}

/**
 * Encapsulates all data and behavior that should be associated with a Document. Currently, 
 * Documents are created with a DocumentBuilder via a DocumentCreationForm. They can be directly
 * instantiated here, but it is more difficult because the fields are not directly mutable. This is
 * on purpose since Documents should not expose their implementation for the sake of encapsulation.
 */
class Document {
  private readonly verified: boolean;
  private readonly tags: string[];
  private readonly type: DocumentType;
  private readonly coords: Coords;
  private readonly title: string;
  private readonly body: string;
  readonly id: string;

  /**
   * 
   * @param verified if the contents of this document can be verified with credible sources
   * @param tags the user-chosen tags relevant to this document
   * @param type the type of article. See {@link DocumentType}
   * @param coords the coordinates releva 
   */
  constructor(
    verified: boolean, 
    tags: string[], 
    type: DocumentType, 
    coords: Coords,
    title: string,
    body: string,
    id: string,
  ) {
    this.verified = verified;
    this.tags = tags;
    this.type = type;
    this.coords = coords;
    this.title = title;
    this.body = body;
    this.id = id;
  }

  /**
   * Adds this Document visually to a Mapbox map by adding a visual marker and popup to the map.
   * @param map the map to add this document to
   */
  addToMap = (map: mapboxgl.Map): void => {
    const popup = new mapboxgl.Popup({ closeButton: true })
      .setHTML(`
        <div style="display:flex; flex-direction:column">
          <h4>${this.body}</h4>
          <div><a href="#">See Full Article</a></div>
        </div>
      `);

    const marker = new mapboxgl.Marker()
      .setLngLat([this.coords.lng, this.coords.lat])
      .setPopup(popup)
      .addTo(map);

    map.setCenter([this.coords.lng, this.coords.lat]);

    // By default, markers are drawn even outside canvas, so we need to erase them when they are
    // outside the bounds of the canvas.
    map.on('move', () => {
      const markerInsideMap = map.getBounds().contains([this.coords.lng, this.coords.lat]);
      if (!markerInsideMap) {
        marker.remove();
      } else {
        marker.addTo(map);
      }
    })
  }
  
  /**
   * Truncates the given string with ellipsis if too long
   * @param input the string to truncate
   * @param maxLen the maximum length of the desired string, in characters
   */
  private truncate(input: string, maxLen: number): string {
    return input.length > maxLen ? `${input.substring(0, maxLen)}...` : input;
  }

  /**
   * Returns a graphical card holding the title, preview article text, and a link to the full
   * article. 
   */
  getGraphicalCard = () => {
    return (
      <DocumentCard>
        <div tw="flex flex-col">
          <h3>{this.title}</h3>
          <p>{this.truncate(this.body, 120)}</p>
          <a href="#">See Full Article</a>
        </div>
      </DocumentCard>
    )
  }

  /**
   * Returns a preview card describing this article.
   * @param onDragBegin the callback for when a drag begins on this card
   * @param onDragEnd the callback for when a drag ends on this card
   * @param cardType the type of card, used to determine where it can be dragged to (see types in
   * the react-dnd library) 
   */
  getDraggableCard = ({onDragBegin, onDragEnd, cardType}: {
    onDragBegin?: (monitor: DragSourceMonitor) => void,
    onDragEnd?: (item: { article: Document, type: string }, monitor: DragSourceMonitor) => void,
    cardType: DraggableCardType
  }): JSX.Element => {
    const [{ isDragging }, drag] = useDrag({
      item: { article: this, type: cardType },
      begin: (monitor) => {
        if (onDragBegin) onDragBegin(monitor);
      },
      end: (item, monitor) => {
        // Make sure both are not undefined
        if (onDragEnd && item) onDragEnd(item, monitor);
      },
      collect: (monitor: any) => ({
        isDragging: monitor.isDragging()
      })
    });

    return (
      <div ref={drag} style={{opacity: isDragging ? 0 : 1}}>
        <this.getGraphicalCard />
      </div>
    )
  }

  /**
   * Returns the type as a string
   * @param type the given `DocumentType`
   */
  private typeAsString(type: DocumentType): string {
    switch (type) {
      case DocumentType.ARCHIVE_WITH_LOCATION:
        return "Archive with Location";
      case DocumentType.ARCHIVE_WITH_REGION:
        return "Archive with Region";
      case DocumentType.WALKING_TOUR:
        return "Walking Tour";
    }
  }

  /**
   * Returns the JSX component that shows this document as a full article (as opposed to a preview).
   */
  getGraphicalArticle = (): JSX.Element => {
    return (
      <div tw="flex flex-col">
        <h1>{this.title}</h1>
        <div><strong>Type:</strong> {this.typeAsString(this.type)}</div>
        <p>{this.body}</p>
        <div>Tags: {this.tags.join(", ")}</div>
        <div>Location:</div>
        <MapboxMap handleInitialRender={(map) => {
          new mapboxgl.Marker()
            .setLngLat([this.coords.lng, this.coords.lat])
            .addTo(map);
          map.setCenter([this.coords.lng, this.coords.lat]);
        }} />
      </div>
    );
  }
}

export default Document;