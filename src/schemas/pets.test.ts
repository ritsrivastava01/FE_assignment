import { BasePetSchema } from './pets';

describe('Pet Schemas', () => {
  it('should validate a BasePetSchema object', () => {
    // Arrange
    const validPet = {
      id: 1,
      dateAdded: '01-11-2022',
      name: 'Buddy',
      photoUrl: 'http://example.com/photo.jpg',
      species: 'Dog',
      available: 'yes',
      birthYear: 2018,
    };

    // Act
    const result = BasePetSchema.safeParse(validPet);

    // Assert
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.dateAdded).toBeInstanceOf(Date);
      expect(result.data.available).toBe(true);
    }
  });

  describe('Error handling', () => {
    it('should throw an error when the date is invalid', () => {
      // Arrange
      const invalidPet = {
        id: 1,
        dateAdded: 'invalid-date',
        name: 'Buddy',
      };

      // Act
      const result = BasePetSchema.safeParse(invalidPet);

      // Assert
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Invalid Date');
      }
    });

    it('should validate invalid BasePetSchema object', () => {
      // Arrange
      const invalidPet = {
        id: 'one',
        dateAdded: '01-01-2020',
        name: 'Buddy',
        photoUrl: 'http://example.com/photo.jpg',
        species: 'Dog',
        available: 'yes',
        birthYear: 2018,
      };

      // Act
      const result = BasePetSchema.safeParse(invalidPet);

      // Assert
      expect(result.success).toBe(false);
    });

    it('should validate the species enum', () => {
      // Arrange
      const invalidPet = {
        id: 1,
        dateAdded: '01-01-2020',
        name: 'Buddy',
        photoUrl: 'http://example.com/photo.jpg',
        species: 'snake',
        available: 'yes',
        birthYear: 2018,
      };

      // Act
      const result = BasePetSchema.safeParse(invalidPet);

      // Assert
      console.log(result.error);
      expect(result.success).toBe(false);
      expect(result.error?.message).contain('Invalid enum value. Expected');
    });
  });
});
