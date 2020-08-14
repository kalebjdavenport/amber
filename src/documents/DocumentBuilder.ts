import Document, { Coords, DocumentType } from "./Document";

/**
 * Mutable builder class for {@link Document}. The purpose is to make document creation easy;
 * however, a Document object should not have directly mutable data to ensure that other Objects do 
 * not rely on a specific implementation of the Document class.
 */
class DocumentBuilder {
  public verified?: boolean;
  public tags: string[] = [];
  public type?: DocumentType;
  public coords?: Coords;
  public articleTitle?: string;
  public articleBody?: string;

  /**
   * Creates a new Document using this DocumentBuilder's configuration.
   */
  build() {
    if (this.anyUndefined(this.verified, this.tags, this.type, this.coords)) {
      throw new Error("All fields must be set before a Document can be built.");
    } else {
      return new Document(
        this.verified || false, 
        this.tags || [], 
        this.type || DocumentType.WALKING_TOUR, 
        this.coords || {lat: 0, lng: 0},
        this.articleTitle || "",
        this.articleBody || "",
      );
    }
  }

  // Returns if any item in the given list is undefined
  private anyUndefined(...list: any[]) {
    for (let item of list) {
      if (item === undefined) {
        return true;
      }
    }

    return false;
  }
}

export default DocumentBuilder;