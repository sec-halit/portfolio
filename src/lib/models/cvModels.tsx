import mongoose from "mongoose";

const cvSchema = new mongoose.Schema({
    "infos": {
      "location": {
        "type": "String"
      },
      "phone": {
        "type": "String"
      },
      "email": {
        "type": "String"
      },
      "profileUrl": {
        "type": "String"
      },
      "fullName": {
        "type": "String"
      },
      "tagName": {
        "type": "String"
      }
    },
    "works": {
      "title": {
        "type": "String"
      },
      "icon": {
        "type": "String"
      },
      "items": {
        "type": [
          "Mixed"
        ]
      }
    },
    "skills": {
      "title": {
        "type": "String"
      },
      "icon": {
        "type": "String"
      },
      "items": {
        "type": [
          "Mixed"
        ]
      }
    },
    "educations": {
      "title": {
        "type": "String"
      },
      "icon": {
        "type": "String"
      },
      "items": {
        "type": [
          "Mixed"
        ]
      }
    },
    "projects": {
      "title": {
        "type": "String"
      },
      "icon": {
        "type": "String"
      },
      "items": {
        "type": [
          "Mixed"
        ]
      }
    },
    "references": {
      "title": {
        "type": "String"
      },
      "icon": {
        "type": "String"
      },
      "items": {
        "type": [
          "Mixed"
        ]
      }
    }
  },
    { timestamps: true }
);
    export interface Infos {
        location: string;
        phone: string;
        email: string;
        profileUrl: string;
        fullName: string;
        tagName: string;
    }

    export interface Item {
        title: string;
        dateTitle: string;
        detail: string;
    }

    export interface Works {
        title: string;
        icon: string;
        items: Item[];
    }

    export interface Item2 {
        title: string;
        column: number;
    }

    export interface Skills {
        title: string;
        icon: string;
        items: Item2[];
    }

    export interface Item3 {
        title: string;
        dateTitle: string;
        detail: string;
    }

    export interface Educations {
        title: string;
        icon: string;
        items: Item3[];
    }

    export interface Item4 {
        title: string;
        column: number;
    }

    export interface Projects {
        title: string;
        icon: string;
        items: Item4[];
    }

    export interface Item5 {
        title: string;
        phone: string;
        detail: string;
    }

    export interface References {
        title: string;
        icon: string;
        items: Item5[];
    }

    export interface Cvs {
        infos: Infos;
        works: Works;
        skills: Skills;
        educations: Educations;
        projects: Projects;
        references: References;
    }

export default mongoose.models.cvs || mongoose.model<Cvs>('cvs', cvSchema);