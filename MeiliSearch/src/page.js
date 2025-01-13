"use client";

import { useState, useEffect } from "react";
import {
  Stack,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { View, ScrollView } from "react-native-web";

import { MeiliSearch } from "meilisearch";

const client = new MeiliSearch({
  host: "https://dsm-5b.cloud/",
  apiKey: "a55bce71f129cebb2d8810f2c1a158d76a60a48117b1a2b6aee44c994c21",
});

const index = client.index("users");

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const onSearch = async () => {
    if (search.trim() !== "") {
      const result = await index.search(search);
      setResults(result.hits);
    } else {
      setResults([]);
    }
  };

  useEffect(() => {
    onSearch();
  }, [search]);

  const filteredResults = results.filter((result) => {
    const fullName = `${result.first_name} ${result.last_name}`.toLowerCase();
    const email = result.email.toLowerCase();
    const searchValue = search.toLowerCase();
    return fullName.includes(searchValue) || email.includes(searchValue);
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Box width="100%" mb={2}>
        <TextField
          width="100%"
          fullWidth
          value={search}
          onChange={handleChange}
          id="outlined-basic"
          label="outlined"
          variant="outlined"
        ></TextField>
      </Box>
      {search.trim() !== "" && (
        <ScrollView style={{ maxHeight: "60%" }}>
          <List>
            {filteredResults.map((result, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`${result.first_name} ${result.last_name}`}
                  secondary={`Email: ${result.email}`}
                />
              </ListItem>
            ))}
          </List>
        </ScrollView>
      )}
    </View>
  );
}
