import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
} from '@mui/material';

// Mock data for different time frames
const leaderboardData = {
  daily: [
    { userId: 1, userName: 'Alice', mentionCount: 20 },
    { userId: 2, userName: 'Bob', mentionCount: 18 },
    { userId: 3, userName: 'Charlie', mentionCount: 15 },
    { userId: 4, userName: 'David', mentionCount: 12 },
    { userId: 5, userName: 'Eve', mentionCount: 10 },
  ],
  weekly: [
    { userId: 1, userName: 'Alice', mentionCount: 100 },
    { userId: 2, userName: 'Bob', mentionCount: 90 },
    { userId: 3, userName: 'Charlie', mentionCount: 80 },
    { userId: 4, userName: 'David', mentionCount: 70 },
    { userId: 5, userName: 'Eve', mentionCount: 60 },
  ],
  monthly: [
    { userId: 1, userName: 'Alice', mentionCount: 300 },
    { userId: 2, userName: 'Bob', mentionCount: 250 },
    { userId: 3, userName: 'Charlie', mentionCount: 200 },
    { userId: 4, userName: 'David', mentionCount: 180 },
    { userId: 5, userName: 'Eve', mentionCount: 150 },
  ],
};

// Styled TableRow for futuristic effect
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  transition: '0.3s',
  '&:hover': {
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

// Badges for top three ranks
const Badge = styled('span')(({ theme }) => ({
  borderRadius: '12px',
  padding: '4px 8px',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '0.9rem',
  marginRight: '8px',
}));

const Leaderboard = ({ timeFrame }) => {
  // Get the appropriate data based on the selected time frame
  const topUsers = leaderboardData[timeFrame].sort((a, b) => b.mentionCount - a.mentionCount).slice(0, 5);

  // Custom styles for rank highlighting
  const getRowStyle = (index) => {
    switch (index) {
      case 0:
        return { backgroundColor: '#76dde1' }; // Gold for 1st
      case 1:
        return { backgroundColor: '#54d5d9' }; // Silver for 2nd
      case 2:
        return { backgroundColor: '#43aaae' }; // Bronze for 3rd
      default:
        return {};
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxHeight: '100%',
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2, textAlign: 'center', color: 'colors.grey[400]', fontWeight: 'bold' }}>
        Top Mentions - {timeFrame.charAt(0).toUpperCase() + timeFrame.slice(1)}
      </Typography>

      {/* Scrollable table container */}
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          borderRadius: '8px',
          overflowY: 'auto',
          maxHeight: '450px',
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>User</TableCell>
              <TableCell align="right">Mentions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topUsers.map((user, index) => (
              <StyledTableRow key={user.userId} sx={{ ...getRowStyle(index) }}>
                <TableCell>
                  {index + 1}
                  {index === 0 && <Badge style={{ backgroundColor: '#76dde1' }}>🏆</Badge>}
                  {index === 1 && <Badge style={{ backgroundColor: '#54d5d9' }}>🥈</Badge>}
                  {index === 2 && <Badge style={{ backgroundColor: '#43aaae' }}>🥉</Badge>}
                </TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell align="right">{user.mentionCount}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Leaderboard;
