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
 * Although this class does nothing of interest currently, it serves the purpose of encapsulating
 * all data and behavior that should be associated with a Document. Currently, Documents are created
 * with a DocumentBuilder via a DocumentCreationForm.
 */
class Document {
  private readonly verified: boolean;
  private readonly tags: string[];
  private readonly type: DocumentType;
  private readonly coords: Coords;
  private readonly title: string;
  private readonly body: string;

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
  ) {
    this.verified = verified;
    this.tags = tags;
    this.type = type;
    this.coords = coords;
    this.title = title;
    this.body = body;
  }
}

export default Document;