const authService = {
  logout: async (): Promise<void> => {
    try {
      // Ваша логика выхода из системы
      // Например, удаление токена аутентификации из localStorage
      localStorage.removeItem('authToken');
      console.log('Пользователь успешно вышел из системы');
    } catch (error) {
      console.error('Ошибка при выходе из системы', error);
    }
  }
};

export default authService;
