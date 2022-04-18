interface MajorCredits {
    credits: number;
    brand: 'Major Credits'
}

interface MinorCredits {
    credits: number;
    brand: 'Minor Credits'
    
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const sum: MajorCredits = {
        credits: subject1.credits + subject2.credits,
        brand: 'Major Credits'
    }
    return sum;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const sum: MinorCredits = {
        credits: subject1.credits + subject2.credits,
        brand: 'Minor Credits'
    }
    return sum;
}

